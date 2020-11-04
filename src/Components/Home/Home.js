import React from "react";
import NavbarWhite from "../NavbarWhite";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="NavBar" style={{ height: "5vh" }}>
        <NavbarWhite />
      </div>
      <div class="container-fluid">
        <section>
          <div
            class="row"
            style={{
              height: "90vh",
            }}
          >
            <div class=" col-sm-12 align-self-center justify-content-center text-center">
              <h3>
                Hi!&nbsp;I am&nbsp;<b>Rodrigo Mercador</b>
              </h3>
            </div>
          </div>
        </section>
        <section>
          <div
            class="row"
            style={{
              height: "5vh",
            }}
          >
            <div class="col-sm-12 align-self-start">
              {/* <i style={{}} className="fa fa-github" /> */}
              <FaGithub size="1.8em" />
            </div>
            <div class="col-sm-12 align-self-start">
              {/* <i className="fa fa-linkedin" /> */}
              <FaLinkedin size="1.8em" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
