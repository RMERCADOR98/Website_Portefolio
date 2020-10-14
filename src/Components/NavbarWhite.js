import React from "react";
import { Link } from "react-router-dom";

const NavbarWhite = () => {
  return (
    <nav class="navbar navbar-dark bg-transparent fixed-top">
      <div class="container-fluid">
        <Link class="navbar-brand text-white" to="/">
          RM
        </Link>
        <form class="d-flex">
          <span class="navbar-toggler-icon"></span>
        </form>
      </div>
    </nav>
  );
};

export default NavbarWhite;
