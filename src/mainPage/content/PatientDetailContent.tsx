import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RouteEnum } from "../../data/routeEnum";
import { AvatarBox } from "../doctor/doctor-detail/AvatarBox";
import { Button } from "../../components/Button";
import {
  BirthBox,
  NameBox,
  PhoneNumberBox,
  TextInputBox,
} from "../doctor/doctor-detail/NameBox";
import { Patient, PatientContext } from "../../context/PatientContext";
import { SexDropDown } from "../doctor/doctor-detail/SexDropDown";

export const PatientDetailContent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { patientId } = useParams();
  const { patients, setPatients } = useContext(PatientContext);
  const currentPatient = patients.find((patient) => patient.id === patientId);
  const [patient, setPatient] = useState<Patient | undefined>(currentPatient);
  const navigate = useNavigate();

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      if (patient) {
        setPatient({ ...patient, [attribute]: value });
      }
    };
  };

  const saveDoctor = () => {
    setPatients(
      patients.map((patientItem) => {
        if (patient && patientItem.id === patient.id) {
          return patient;
        }
        return patientItem;
      })
    );
    navigate(RouteEnum.MAIN_PAGE);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.MAIN_PAGE);
  };

  if (!patient) {
    return <>Error no patient</>;
  }

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
        <div className="note-box">
          <TextInputBox
            entity={patient ? patient.note : ""}
            placeholder="Điền ghi chú"
            boxTitle="Ghi chú"
            setEntity={setAttribute("note")}
          />
        </div>
        <SexDropDown sex={patient ? patient.gender : ""} setSex={() => {}} />
      </div>
      <ButtonsBox saveDoctor={saveDoctor} cancelEditDoctor={cancelEditDoctor} />
    </div>
  );
};

const ButtonsBox = ({
  saveDoctor,
  cancelEditDoctor,
}: {
  saveDoctor: Function;
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
        onClick={saveDoctor}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};
