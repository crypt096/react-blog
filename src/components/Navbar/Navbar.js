import React from "react";

import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-wrapper">
      <a className="navbar-brand navbar-title" href="/">
        My blog
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2 navbar-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <a className="nav-link" href="/">
          Link 1
        </a>
        <a className="nav-link" href="/">
          Link 2
        </a>
        <a className="nav-link" href="/">
          Link 3
        </a>
        <a className="nav-link" href="/">
          My profile
        </a>
        <a className="nav-link" href="/">
          Logout
        </a>
      </form>
    </nav>
  );
}

export default Navbar;
