import React from "react";

import "./navbar.scss";

function Navbar() {
  return (
    <nav class="navbar navbar-dark navbar-wrapper">
      <a class="navbar-brand navbar-title" href="/">
        My blog
      </a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2 navbar-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <a class="nav-link" href="/">
          Link 1
        </a>
        <a class="nav-link" href="/">
          Link 2
        </a>
        <a class="nav-link" href="/">
          Link 3
        </a>
        <a class="nav-link" href="/">
          My profile
        </a>
        <a class="nav-link" href="/">
          Logout
        </a>
      </form>
    </nav>
  );
}

export default Navbar;
