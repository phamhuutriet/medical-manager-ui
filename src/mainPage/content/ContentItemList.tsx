import React from "react";
import SearchIcon from "../../img/search-normal.svg";
import FilterIcon from "../../img/setting-4.svg";
import ArrowLeftIcon from "../../img/arrow-left.svg";
import ArrowRightIcon from "../../img/arrow-right.svg";
import { ContentTable } from "./ContentTable";
import "./index.css";

export const ContentItemList = () => {
  return (
    <div className="content-item-list">
      <div className="filter-container">
        <SearchBar />
        <FilterButton />
      </div>
      <ContentTable />
      <PaginationBar />
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

const PaginationBar = () => {
  return (
    <div className="page-container">
      <img className="image" alt="arrow-left" src={ArrowLeftIcon} />
      <div className="page-number">1</div>
      <div className="page-number-unselected">2</div>
      <div className="page-number-unselected">3</div>
      <img className="image" alt="arrow-right" src={ArrowRightIcon} />
    </div>
  );
};
