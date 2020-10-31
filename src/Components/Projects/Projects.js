import React from "react";
import NavbarBlack from "../NavbarBlack";
import Footer from "../Footer";
import { Link, useRouteMatch } from "react-router-dom";

import { BiDownArrowCircle } from "react-icons/bi";

const Projects = () => {
  let { url } = useRouteMatch();

  return (
    <div>
      <div className="NavBar">
        <NavbarBlack />
      </div>
      <div
        class=" justify-content-center text-center pt-5 container-fluid "
        style={{
          backgroundColor: "white ",
          minHeight: "100vh",
          color: "black",
        }}
      >
        <section className="Top">
          <div className="Title">
            <h3>Check out my work</h3>
          </div>
          <div class="pt-5">
            <BiDownArrowCircle size="2em" />
          </div>
        </section>

        <section className="Projects" class="container pt-5">
          <div class="row justify-content-evenly g-5">
            <div
              class="p-2 col-sm-5 col-m-5 p-4"
              style={{ backgroundImage: `url("logo.png")` }}
            >
              <div class="z-index-1">
                <div className="topText" class="text-left">
                  <p>
                    2020
                    <br />
                    <b>Lar App - </b> The nursing home Managment
                  </p>
                </div>
                <div classname="spaceBettwen" style={{ height: "560px" }}></div>
                <div className="bottomText" class="text-right">
                  <Link
                    to={`${url}project1`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            <div class="p-2 col-sm-5 bg-secondary">Projeto 2</div>
          </div>
        </section>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
