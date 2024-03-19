import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AvatarBox } from "../../doctor/doctor-detail/AvatarBox";
import { Button } from "../../../components/Button";
import {
  BirthBox,
  MultiOptionBox,
  NameBox,
  PhoneNumberBox,
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
        <div className="doctor-detail-content">
          <AvatarBox />
          <NameBox
            entity={patient}
            setFirstName={setAttribute("firstName")}
            setLastName={setAttribute("lastName")}
          />
          <div className="box">
            <div style={{ width: "100%" }}>
              <SexDropDown
                sex={patient ? patient.gender : ""}
                setSex={setAttribute("gender")}
              />
            </div>
            <div style={{ width: "100%" }}>
              <TextInputBox
                text={patient?.address}
                setText={setAttribute("address")}
                boxTitle="Địa chỉ"
                placeholder="Địa chỉ bệnh nhân"
              />
            </div>
          </div>
          <div className="box">
            <div style={{ width: "100%" }}>
              <BirthBox
                dateOfBirth={patient ? patient.dateOfBirth : ""}
                setDateOfBirth={setAttribute("dateOfBirth")}
              />
            </div>
            <div style={{ width: "100%" }}>
              <PhoneNumberBox
                phoneNumber={patient ? patient.phoneNumber : ""}
                setPhoneNumber={setAttribute("phoneNumber")}
              />
            </div>
          </div>
          <MultiOptionBox
            options={patient.allergies}
            setOptions={setAttribute("allergies")}
          />
          <div className="note-box">
            <TextInputBox
              text={patient ? patient.note : ""}
              placeholder="Điền ghi chú"
              boxTitle="Ghi chú"
              setText={setAttribute("note")}
            />
          </div>
          <DoctorDropDown
            doctor={patient.doctor}
            setDoctor={setAttribute("doctor")}
          />
        </div>
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
