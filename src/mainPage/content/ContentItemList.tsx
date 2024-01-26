import React from "react";
import "./index.css";
import SearchIcon from "../../img/search-normal.svg";
import FilterIcon from "../../img/setting-4.svg";

export const ContentItemList = () => {
  return (
    <div className="content-item-list">
      <div className="filter-container">
        <SearchBar />
        <FilterButton />
      </div>
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
