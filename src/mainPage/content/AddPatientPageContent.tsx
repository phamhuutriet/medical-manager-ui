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

export const AddPatientPageContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { patients, setPatients } = useContext(PatientContext);
  const [patient, setPatient] = useState<any>();
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
    navigate(RouteEnum.MAIN_PAGE);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };

  return (
    <div>
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
        savePatient={savePatient}
        cancelEditDoctor={cancelEditDoctor}
      />
    </div>
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
