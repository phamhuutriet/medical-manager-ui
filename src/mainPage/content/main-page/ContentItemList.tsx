import React, { useContext, useState } from "react";
import { ContentTable } from "./ContentTable";
import { Button } from "../../../components/Button";
import { SearchIcon } from "../../../img/svg/SearchIcon";
import { PaginationBar } from "./PaginationBar";
import { FilterButtonMenu } from "./FilterButton";
import { PatientContext } from "../../../context/PatientContext";
import "../index.css";

export const ContentItemList = () => {
  const maxRowPerPage = 7;
  const [curPage, setCurPage] = useState(0);
  const { patients } = useContext(PatientContext);
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
