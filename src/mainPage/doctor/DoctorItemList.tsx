import React, { useState } from "react";
import { Button } from "../../components/Button";
import { SearchIcon } from "../../img/svg/SearchIcon";
import mockDoctors from "../../mock-data/mock_doctor.json";
import { PaginationBar } from "../content/PaginationBar";
import { FilterDoctorButtonMenu } from "./FilterDoctorButton";
import { DoctorContentTable } from "./DoctorContentTable";

function createRowData(
  id: string,
  name: string,
  sex: string,
  dateOfBirth: string,
  phoneNumber: string
) {
  return { id, name, sex, dateOfBirth, phoneNumber };
}

const doctors = mockDoctors.map((mockDoctor) =>
  createRowData(
    mockDoctor.id,
    mockDoctor.name,
    mockDoctor.gender,
    mockDoctor.dateOfBirth,
    mockDoctor.phoneNumber
  )
);

export const DoctorItemList = () => {
  const maxRowPerPage = 8;
  const [curPage, setCurPage] = useState(0);
  const numOfPages = Math.ceil(doctors.length / maxRowPerPage);

  const onClickPage = (pageIdx: number) => {
    setCurPage(pageIdx);
  };

  return (
    <div className="content-item-list">
      <div className="filter-container">
        <SearchBar />
        <FilterDoctorButtonMenu />
      </div>
      <DoctorContentTable
        doctors={doctors.slice(
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
