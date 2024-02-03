import React from "react";
import SearchIcon from "../../img/search-normal.svg";
import FilterIcon from "../../img/setting-4.svg";
import { ContentTable } from "./ContentTable";
import { Button } from "../../components/Button";
import { ArrowRightIcon } from "../../img/svg/ArrowRightIcon";
import { ArrowLeftIcon } from "../../img/svg/ArrowLeftIcon";
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
      <Button
        className="arrow-right"
        icon={<ArrowLeftIcon defaultColor="#A5A7AF" selectedColor="#0D0C0C" />}
      />
      <Button onClick={() => {}} text="1" className="page-number" />
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
      />
      <Button
        className="arrow-right"
        icon={<ArrowRightIcon defaultColor="#0D0C0C" selectedColor="#A5A7AF" />}
      />
    </div>
  );
};
