import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../data/routeEnum";
import { AvatarBox } from "../doctor/doctor-detail/AvatarBox";
import { Button } from "../../components/Button";
import {
  BirthBox,
  MultiOptionBox,
  NameBox,
  PhoneNumberBox,
  TextInputBox,
} from "../doctor/doctor-detail/NameBox";
import { PatientContext } from "../../context/PatientContext";
import { SexDropDown } from "../doctor/doctor-detail/SexDropDown";
import { DoctorDropDown } from "../doctor/doctor-detail/DoctorDropDown";
import { AddSuccessfulModal } from "../../components/AddSuccessfulModal";

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
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { patients, setPatients } = useContext(PatientContext);
  const [patient, setPatient] = useState<any>();
  const patientKeys = Object.keys(patient ? patient : {});
  const isValidPatient = VALID_KEYS.every((key) => patientKeys.includes(key));
  const [isAddSuccessfulModalOpen, setIsAddSuccessfulModalOpen] =
    useState(false);
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      setPatient({ ...patient, [attribute]: value });
    };
  };

  const savePatient = () => {
    // TODO: call API here
    const newPatient = { ...patient, id: "1" };
    setPatients([...patients, newPatient]);
    setIsAddSuccessfulModalOpen(true);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };

  return (
    <div>
      <AddSuccessfulModal
        open={isAddSuccessfulModalOpen}
        handleClose={() => setIsAddSuccessfulModalOpen(false)}
        handleRedirect={() => navigate(RouteEnum.MAIN_PAGE)}
        onClickConfirm={() => {}}
        title="Thêm bệnh nhân thành công"
        innerText="Chúc mừng bạn đã tạo hồ sơ bệnh nhân thành công"
        leftButtonText="Về tổng quan"
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
              entity={patient?.address}
              setEntity={setAttribute("address")}
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
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
            />
          </div>
          <div style={{ width: "100%" }}>
            <PhoneNumberBox
              phoneNumber={patient ? patient.phoneNumber : ""}
              setPhoneNumber={setAttribute("phoneNumber")}
              isIconDisplay={true}
            />
          </div>
        </div>
        <MultiOptionBox
          options={patient && patient.allergies ? patient.allergies : []}
          setOptions={setAttribute("allergies")}
        />
        <div className="note-box">
          <TextInputBox
            entity={patient ? patient.note : ""}
            placeholder="Điền ghi chú"
            boxTitle="Ghi chú"
            setEntity={setAttribute("note")}
          />
        </div>
        <DoctorDropDown
          doctor={patient ? patient.doctor : undefined}
          setDoctor={setAttribute("doctor")}
        />
      </div>
      <ButtonsBox
        isValidPatient={isValidPatient}
        savePatient={savePatient}
        cancelEditPatient={cancelEditDoctor}
      />
    </div>
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
