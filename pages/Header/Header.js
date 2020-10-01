import React from "react";
import SearchBar from "./Search-Bar";
import SearchFilter from "./search-Filter";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-info clearfix">
      <nav className="main-header  navbar navbar-expand navbar-white navbar-light clearfix">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <SearchBar />

        <SearchFilter />
      </nav>
    </div>
  );
};
export default Header;
