import React from "react";
import { Link } from "react-router-dom";

const NavbarBlack = () => {
  return (

    <nav class="navbar navbar-light bg-white " >
      <div class="container-fluid" >
        <Link class="navbar-brand text-black" to="/">
          RM
        </Link>
        <form class="d-flex">
          <span class="navbar-toggler-icon"></span>
        </form>
      </div>
    </nav>

  );
};

export default NavbarBlack;
