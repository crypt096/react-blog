import React from "react";

import "./navbar.scss";

function Navbar({ searchTerm, handleChange }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-wrapper">
      <a className="navbar-brand navbar-title" href="/">
        My blog
      </a>
      <form className="ml-auto form-inline">
        <input
          className="form-control mr-sm-2 navbar-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <span className="search-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link" href="/">
              Link 1
            </a>
            <a className="nav-item nav-link" href="/">
              Link 2
            </a>
            <a className="nav-item nav-link" href="/">
              Link 3
            </a>
            <a className="nav-item nav-link" href="/">
              My profile
            </a>
            <a className="nav-item nav-link" href="/">
              Logout
            </a>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Navbar;
