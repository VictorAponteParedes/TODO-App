import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext/index";

export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
