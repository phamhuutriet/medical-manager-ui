import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AvatarBox } from "../../doctor/doctor-detail/AvatarBox";
import { Button } from "../../../components/Button";
import {
  BirthBox,
  MultiOptionBox,
  NameBox,
  TextInputBox,
} from "../../doctor/doctor-detail/NameBox";
import { Patient } from "../../../context/PatientContext";
import { SexDropDown } from "../../doctor/doctor-detail/SexDropDown";
import { DoctorDropDown } from "../../doctor/doctor-detail/DoctorDropDown";
import { updatePatientService } from "../../../service/patientService";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { WholeComponentLoadingWrapper } from "../../../components/LoadingWrapper";
import { AddSuccessfulModal } from "../../../components/AddSuccessfulModal";
import {
  usePatientAPI,
  usePatientData,
} from "../../../context/PatientDataProvider";
import {
  Box,
  DoctorDetailContentContainer,
} from "../../doctor/doctor-detail/Styles";

export const EditPatientContent = () => {
  const { patientId } = useParams();
  const { patients } = usePatientData();
  const { updatePatient } = usePatientAPI();
  const currentPatient = patients.find((patient) => patient.id === patientId);
  const [patient, setPatient] = useState<Patient | undefined>(currentPatient);
  const [isUpdateSuccessfulModalOpen, setIsUpdateSuccessfulModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const throwAsyncError = useThrowAsyncError();
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      if (patient) {
        setPatient({ ...patient, [attribute]: value });
      }
    };
  };

  const savePatient = async () => {
    try {
      setIsLoading(true);
      const updatedPatient = await updatePatientService(patient as Patient);
      updatePatient(updatedPatient);
      setIsLoading(false);
      setIsUpdateSuccessfulModalOpen(true);
    } catch {
      throwAsyncError(new Error("Lỗi cập nhật bệnh nhân, vui lòng thử lại"));
    }
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };

  if (!patient) {
    return <>Error no patient</>;
  }

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang cập nhật bệnh nhân, vui lòng đợi tí"
    >
      <div>
        <AddSuccessfulModal
          open={isUpdateSuccessfulModalOpen}
          handleClose={() => setIsUpdateSuccessfulModalOpen(false)}
          handleRedirect={() => navigate(RouteEnum.PATIENT_PAGE)}
          onClickConfirm={() => navigate(`/patients/details/${patient.id}`)}
          title="Cập nhật bệnh nhân thành công"
          innerText="Chúc mừng bạn đã cập nhật hồ sơ bệnh nhân thành công"
          leftButtonText="Về danh sách bệnh nhân"
          rightButtonText="Xem chi tiết"
        />
        <DoctorDetailContentContainer>
          <AvatarBox />
          <NameBox
            entity={patient}
            setFirstName={setAttribute("firstName")}
            setLastName={setAttribute("lastName")}
          />
          <Box>
            <SexDropDown
              sex={patient ? patient.gender : ""}
              setSex={setAttribute("gender")}
            />
            <TextInputBox
              text={patient?.address}
              setText={setAttribute("address")}
              boxTitle="Địa chỉ"
              placeholder="Địa chỉ bệnh nhân"
            />
          </Box>
          <Box>
            <BirthBox
              dateOfBirth={patient ? patient.dateOfBirth : ""}
              setDateOfBirth={setAttribute("dateOfBirth")}
            />
            <TextInputBox
              text={patient ? patient.phoneNumber : ""}
              setText={setAttribute("phoneNumber")}
              boxTitle="Số điện thoại"
              placeholder="+84 999 999 999"
            />
          </Box>
          <MultiOptionBox
            options={patient.allergies}
            setOptions={setAttribute("allergies")}
          />
          <TextInputBox
            text={patient ? patient.note : ""}
            placeholder="Điền ghi chú"
            boxTitle="Ghi chú"
            setText={setAttribute("note")}
            className="note-box"
          />
          <DoctorDropDown
            doctor={patient.doctor}
            setDoctor={setAttribute("doctor")}
          />
        </DoctorDetailContentContainer>
        <ButtonsBox
          savePatient={savePatient}
          cancelEditDoctor={cancelEditDoctor}
        />
      </div>
    </WholeComponentLoadingWrapper>
  );
};

const ButtonsBox = ({
  savePatient,
  cancelEditDoctor,
}: {
  savePatient: Function;
  cancelEditDoctor: Function;
}) => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditDoctor}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className="save-button"
        onClick={savePatient}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};
