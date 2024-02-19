import React, { useState } from "react";
import { ContentTable } from "./ContentTable";
import { Button } from "../../components/Button";
import mockPatients from "../../mock-data/mock_patient.json";
import "./index.css";
import { SearchIcon } from "../../img/svg/SearchIcon";
import { PaginationBar } from "./PaginationBar";
import { FilterButtonMenu } from "./FilterButton";
import { Doctor } from "../../context/DoctorContext";
import { Patient } from "../../context/PatientContext";

const createRowData = (
  id: string,
  firstName: string,
  lastName: string,
  gender: string,
  dateOfBirth: string,
  createdAt: string,
  doctor: Doctor,
  note: string,
  allergies: string[],
  address: string,
  phoneNumber: string
): Patient => {
  return {
    id,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    createdAt,
    doctor,
    note,
    allergies,
    address,
    phoneNumber,
  };
};

const patients = mockPatients
  .slice(0, 10)
  .map((mockPatient) =>
    createRowData(
      mockPatient.id,
      mockPatient.firstName,
      mockPatient.lastName,
      mockPatient.gender,
      mockPatient.dateOfBirth,
      mockPatient.createdAt,
      mockPatient.doctor,
      mockPatient.note,
      mockPatient.allergies,
      mockPatient.address,
      mockPatient.phoneNumber
    )
  );

export const ContentItemList = () => {
  const maxRowPerPage = 8;
  const [curPage, setCurPage] = useState(0);
  const numOfPages = Math.ceil(patients.length / maxRowPerPage);

  const onClickPage = (pageIdx: number) => {
    setCurPage(pageIdx);
  };

  return (
    <div className="content-item-list">
      <div className="filter-container">
        <SearchBar />
        <FilterButtonMenu />
      </div>
      <ContentTable
        patients={patients.slice(
          curPage * maxRowPerPage,
          (curPage + 1) * maxRowPerPage
        )}
      />
      <PaginationBar
        numOfPages={numOfPages}
        selectedPage={curPage}
        onClickPage={onClickPage}
        setCurPage={setCurPage}
      />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <Button className="search-icon" icon={<SearchIcon />} />
      <input className="search-bar-input" placeholder="Tìm kiếm" />
    </div>
  );
};
