import React from "react";

import searchIcon from "../images/search.svg";

const Button = (
  {
    search = false
  }
) => (
  <button
    href="#0" 
    className="btn-blue d-flex align-items-center"
  >
    {search &&
      <img className="btn-search-icon" src={searchIcon}  />
    }
    <div>Search</div>
  </button>
);

export default Button;