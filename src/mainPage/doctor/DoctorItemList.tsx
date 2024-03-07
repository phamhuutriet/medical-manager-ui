import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { SearchIcon } from "../../img/svg/SearchIcon";
import { PaginationBar } from "../content/main-page/PaginationBar";
import { FilterDoctorButtonMenu } from "./FilterDoctorButton";
import { DoctorContentTable } from "./DoctorContentTable";
import { Doctor, DoctorContext } from "../../context/DoctorContext";

export const DoctorItemList = () => {
  const { doctors } = useContext(DoctorContext);
  const [currentDoctors, setCurrentDoctors] = useState<Doctor[]>(doctors);
  const maxRowPerPage = 7;
  const [curPage, setCurPage] = useState(0);
  const numOfPages = Math.ceil(doctors.length / maxRowPerPage);

  useEffect(() => {
    setCurrentDoctors(doctors);
  }, [doctors]);

  const onClickPage = (pageIdx: number) => {
    setCurPage(pageIdx);
  };

  console.log("DOCTORS: ", doctors);

  return (
    <div className="content-item-list">
      <div className="filter-container">
        <SearchBar setCurrentDoctors={setCurrentDoctors} doctors={doctors} />
        <FilterDoctorButtonMenu />
      </div>
      <DoctorContentTable
        doctors={currentDoctors.slice(
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

const SearchBar = ({
  doctors,
  setCurrentDoctors,
}: {
  doctors: Doctor[];
  setCurrentDoctors: Function;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: any) => {
    const filteredDoctors = doctors.filter((doctor) =>
      `${doctor.firstName} ${doctor.lastName}`.includes(e.target.value)
    );
    setSearchValue(e.target.value);
    setCurrentDoctors(filteredDoctors);
  };

  return (
    <div className="search-bar-container">
      <Button className="search-icon" icon={<SearchIcon />} />
      <input
        className="search-bar-input"
        placeholder="Tìm kiếm theo tên"
        value={searchValue}
        onChange={onChangeSearch}
      />
    </div>
  );
};
