import React, { useState } from "react";
import { Button } from "./Button";
import { SearchIcon } from "../img/svg/SearchIcon";
import "./searchBar.css";

export const SearchBar = ({
  entities,
  setEntity,
  placeholder,
}: {
  entities: any[];
  setEntity: Function;
  placeholder: string;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: any) => {
    const filteredDoctors = entities.filter((entity) =>
      `${entity.firstName} ${entity.lastName}`.includes(e.target.value)
    );
    setSearchValue(e.target.value);
    setEntity(filteredDoctors);
  };

  return (
    <div className="search-bar-container">
      <Button className="search-icon" icon={<SearchIcon />} />
      <input
        className="search-bar-input"
        placeholder={placeholder}
        value={searchValue}
        onChange={onChangeSearch}
      />
    </div>
  );
};
