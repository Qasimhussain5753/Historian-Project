import React from "react";
import { Link } from "react-router-dom";
const SearchFilter = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item  d-sm-inline-block">
        <Link to="/login">Login</Link>
        <a className="navbar-brand" href="#">
          Filter
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
        >
          <i className="fas fa-th-large" />
        </a>
      </li>
    </ul>
  );
};
export default SearchFilter;
