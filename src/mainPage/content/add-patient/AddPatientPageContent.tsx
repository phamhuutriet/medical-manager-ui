import React, { useState } from "react";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../../data/routeEnum";
import { AvatarBox } from "../../doctor/doctor-detail/AvatarBox";
import { Button } from "../../../components/Button";
import {
  BirthBox,
  MultiOptionBox,
  NameBox,
  TextInputBox,
} from "../../doctor/doctor-detail/NameBox";
import { SexDropDown } from "../../doctor/doctor-detail/SexDropDown";
import { DoctorDropDown } from "../../doctor/doctor-detail/DoctorDropDown";
import { AddSuccessfulModal } from "../../../components/AddSuccessfulModal";
import { createPatient } from "../../../service/patientService";
import { WholeComponentLoadingWrapper } from "../../../components/LoadingWrapper";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { usePatientAPI } from "../../../context/PatientDataProvider";
import {
  Box,
  DoctorDetailContentContainer,
} from "../../doctor/doctor-detail/Styles";

const VALID_KEYS = [
  "firstName",
  "lastName",
  "gender",
  "dateOfBirth",
  "phoneNumber",
  "address",
  "doctor",
];

export const AddPatientPageContent = () => {
  const { addPatient } = usePatientAPI();
  const [patient, setPatient] = useState<any>();
  const patientKeys = Object.keys(patient ? patient : {});
  const isValidPatient = VALID_KEYS.every((key) => patientKeys.includes(key));
  const [isAddSuccessfulModalOpen, setIsAddSuccessfulModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const throwAsyncError = useThrowAsyncError();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      setPatient({ ...patient, [attribute]: value });
    };
  };

  const savePatient = async () => {
    try {
      setIsLoading(true);
      const newPatient = await createPatient(patient);
      setIsLoading(false);
      addPatient(newPatient);
      setPatient(newPatient);
      setIsAddSuccessfulModalOpen(true);
    } catch (error) {
      throwAsyncError(
        new Error("Thêm bệnh nhân thất bại, vui lòng thử lại sau")
      );
    }
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang thêm bệnh nhân, vui lòng đợi tí"
    >
      <div>
        <AddSuccessfulModal
          open={isAddSuccessfulModalOpen}
          handleClose={() => setIsAddSuccessfulModalOpen(false)}
          handleRedirect={() => navigate(RouteEnum.MAIN_PAGE)}
          onClickConfirm={() => navigate(`/patients/details/${patient.id}`)}
          title="Thêm bệnh nhân thành công"
          innerText="Chúc mừng bạn đã tạo hồ sơ bệnh nhân thành công"
          leftButtonText="Về tổng quan"
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
            options={patient && patient.allergies ? patient.allergies : []}
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
            doctor={patient ? patient.doctor : undefined}
            setDoctor={setAttribute("doctor")}
          />
        </DoctorDetailContentContainer>
        <ButtonsBox
          isValidPatient={isValidPatient}
          savePatient={savePatient}
          cancelEditPatient={cancelEditDoctor}
        />
      </div>
    </WholeComponentLoadingWrapper>
  );
};

const ButtonsBox = ({
  isValidPatient,
  savePatient,
  cancelEditPatient,
}: {
  isValidPatient: boolean;
  savePatient: Function;
  cancelEditPatient: Function;
}) => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditPatient}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className="save-button"
        onClick={savePatient}
        innerButtonClassName="save-button-inner"
        disable={!isValidPatient}
      />
    </div>
  );
};
