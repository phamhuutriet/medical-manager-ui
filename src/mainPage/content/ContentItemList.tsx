import React, { useState } from "react";
import SearchIcon from "../../img/search-normal.svg";
import FilterIcon from "../../img/setting-4.svg";
import { ContentTable } from "./ContentTable";
import { Button } from "../../components/Button";
import { ArrowRightIcon } from "../../img/svg/ArrowRightIcon";
import { ArrowLeftIcon } from "../../img/svg/ArrowLeftIcon";
import mockPatients from "../../mock-data/mock_patient.json";
import "./index.css";

function createRowData(
  id: string,
  name: string,
  sex: string,
  dateOfBirth: string,
  visitDate: string
  // doctor: string
) {
  return { id, name, sex, dateOfBirth, visitDate };
}

const patients = mockPatients
  .slice(0, 10)
  .map((mockPatient) =>
    createRowData(
      mockPatient.id,
      mockPatient.name,
      mockPatient.gender,
      mockPatient.dateOfBirth,
      mockPatient.createdAt
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
        <FilterButton />
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
      <img className="image" alt="search" src={SearchIcon} />
      <input className="search-bar-input" placeholder="Tìm kiếm" />
    </div>
  );
};

const FilterButton = () => {
  return (
    <div className="filter-button">
      <div>Lọc</div>
      <img className="image" alt="filter" src={FilterIcon} />
    </div>
  );
};

const PaginationBar = ({
  numOfPages,
  selectedPage,
  onClickPage,
  setCurPage,
}: {
  numOfPages: number;
  selectedPage: number;
  onClickPage: any;
  setCurPage: any;
}) => {
  const pageElements = Array.from(
    { length: numOfPages },
    (value, index) => index
  );
  const isReachLeftmost = selectedPage === 0;
  const isReachRightmost = selectedPage === numOfPages - 1;

  return (
    <div className="page-container">
      <Button
        className="arrow-right"
        icon={
          <ArrowLeftIcon
            defaultColor={isReachLeftmost ? "#A5A7AF" : "#0D0C0C"}
            selectedColor={isReachLeftmost ? "#0D0C0C" : "#A5A7AF"}
          />
        }
        disable={isReachLeftmost}
        onClick={() => setCurPage(Math.min(selectedPage - 1, 0))}
      />
      {pageElements.map((value, idx) => {
        return (
          <Button
            onClick={() => onClickPage(idx)}
            text={(idx + 1).toString()}
            className={
              selectedPage === idx ? "page-number" : "page-number-unselected"
            }
            innerButtonClassName={
              selectedPage === idx ? "" : "page-number-unselected-inner"
            }
          />
        );
      })}
      <Button
        className="arrow-right"
        icon={
          <ArrowRightIcon
            defaultColor={isReachRightmost ? "#A5A7AF" : "#0D0C0C"}
            selectedColor={isReachRightmost ? "#0D0C0C" : "#A5A7AF"}
          />
        }
        disable={isReachRightmost}
        onClick={() => setCurPage(Math.max(selectedPage + 1, numOfPages - 1))}
      />
    </div>
  );
};
