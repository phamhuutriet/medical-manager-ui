import React, { useContext, useState } from "react";
import { SectionId } from "../../data/sectionIdEnum";
import { visibilityClassnameFactory } from "../../App";
import { SectionContext } from "../../context/SectionContext";
import { DoctorListPage } from "./DoctorListPage";
import { DoctorDetailPage } from "./doctor-detail/DoctorDetailPage";
import { Doctor, DoctorContext } from "../../context/DoctorContext";
import mockDoctors from "../../mock-data/mock_doctor.json";

function createRowData(
  id: string,
  firstName: string,
  lastName: string,
  sex: string,
  dateOfBirth: string,
  phoneNumber: string
) {
  return { id, firstName, lastName, sex, dateOfBirth, phoneNumber };
}

const MOCK_DOCTORS = mockDoctors.map((mockDoctor) =>
  createRowData(
    mockDoctor.id,
    mockDoctor.firstName,
    mockDoctor.lastName,
    mockDoctor.gender,
    mockDoctor.dateOfBirth,
    mockDoctor.phoneNumber
  )
);

export const DoctorContent = () => {
  const { sectionId } = useContext(SectionContext);
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>(MOCK_DOCTORS);

  console.log("DOCTORS: ", doctors);

  return (
    <DoctorContext.Provider
      value={{ doctorId, setDoctorId, doctors, setDoctors }}
    >
      <section
        id={SectionId.DOCTOR_LIST_PAGE}
        className={visibilityClassnameFactory(
          sectionId,
          SectionId.DOCTOR_LIST_PAGE
        )}
      >
        <DoctorListPage />
      </section>
      <section
        id={SectionId.DOCTOR_DETAIL_PAGE}
        className={visibilityClassnameFactory(
          sectionId,
          SectionId.DOCTOR_DETAIL_PAGE
        )}
      >
        <DoctorDetailPage />
      </section>
    </DoctorContext.Provider>
  );
};
