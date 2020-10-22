import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Center = () => {
  return (
    <div class="container-fluid">
      <section>
        <div
          class="row"
          style={{
            height: "95vh",
          }}
        >
          <div class=" col-sm-12 align-self-center justify-content-center text-center">
            <h3>
              Hi!&nbsp;I am&nbsp;<b>Rodrigo Mercador</b>
            </h3>
            <Link to="/about">
              <button>about</button>
            </Link>
            <Link to="/contact">
              <button>contact</button>
            </Link>
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
  );
};

export default Center;
