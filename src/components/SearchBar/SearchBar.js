import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ find }) => {
  const [search, setSearch] = useState("d");

  return (
    <>
      <label htmlFor="searchTerm" type="text">
        Find Your Repo :{" "}
      </label>
      <input
        type="text"
        id="searchTerm"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Look for your repo..."
      />
      <button type="button" onClick={find(search)}>
        FIND
      </button>
    </>
  );
};

export default SearchBar;
