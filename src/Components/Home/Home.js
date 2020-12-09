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
              <a
                href="https://github.com/RMERCADOR98"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaGithub
                  size="2em"
                  style={{ marginTop: "1rem", marginRight: "0.5rem" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigo-mercador-a904221b0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedin
                  size="2em"
                  style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
