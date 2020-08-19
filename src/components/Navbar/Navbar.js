import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        My blog
      </a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
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
