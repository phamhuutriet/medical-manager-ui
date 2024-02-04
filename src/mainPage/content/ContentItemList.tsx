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
}: {
  numOfPages: number;
  selectedPage: number;
  onClickPage: any;
}) => {
  const pageElements = Array.from(
    { length: numOfPages },
    (value, index) => index
  );

  return (
    <div className="page-container">
      <Button
        className="arrow-right"
        icon={<ArrowLeftIcon defaultColor="#A5A7AF" selectedColor="#0D0C0C" />}
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
      {/* <Button onClick={() => {}} text="1" className="page-number" />
      <Button
        onClick={() => {}}
        text="2"
        className="page-number-unselected"
        innerButtonClassName="page-number-unselected-inner"
      />
      <Button
        onClick={() => {}}
        text="3"
        className="page-number-unselected"
        innerButtonClassName="page-number-unselected-inner"
      /> */}
      <Button
        className="arrow-right"
        icon={<ArrowRightIcon defaultColor="#0D0C0C" selectedColor="#A5A7AF" />}
      />
    </div>
  );
};
