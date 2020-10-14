import React from "react";
import NavbarBlack from "../NavbarBlack";
import { BiDownload } from "react-icons/bi";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <div
      class="d-flex justify-content-center text-center pt-5 mt-5 container-fluid"
      style={{ backgroundColor: "white", minHeight: "100vh", color: "black" }}
    >
      <div className="NavBar">
        <NavbarBlack />
      </div>
      <div className="AboutText">
        <section className="MainText">
          <h3>
            Ready to take new challenges and test my skills to their best!
          </h3>
        </section>

        <section className="SubText" class="pt-5 mt-2">
          <p>I´m a Portuguese Web Developer looking to take new challenges!</p>
          <br />
          <p>
            I´m a very curious aboiut everything that surrounds me and nowadays
            we live in a world <br />
            dominated by the internt, so i felt in love by the way a website can
            change the prespective <br />
            of any person when it is well executed.{" "}
          </p>
          <p>Load times ans simple(but visual) content is the key!</p>
        </section>
        <section>
          <button
            type="button"
            class="btn btn-transparent btn-outline-dark mt-4"
          >
            My Resume &nbsp; &nbsp;
            <BiDownload size="1.2em" />
          </button>
          i´m here now 
        </section>

        <section className="Skills" class="pt-5 mt-5">
          <div className="Title">
            <h2>
              <b>Skills</b>
            </h2>
          </div>
          <div className="Icons" class="container mt-5">
            <div class="row">
              <div class="col-sm">
                <DiHtml5 size="6em" />
                <p />
                <h4>HTML5</h4>
              </div>
              <div class="col-sm">
                <DiCss3 size="6em" />
                <p />
                <h4>CSS3</h4>
              </div>
              <div class="col-sm">
                <DiJavascript1 size="6em" />
                <p />
                <h4>Javascript</h4>
              </div>
              <div class="col-sm">
                <DiNodejsSmall size="6em" />
                <p />
                <h4>Node</h4>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-sm">
                <DiReact size="6em" />
                <p />
                <h4>REACT</h4>
              </div>
              <div class="col-sm mt-3">
                <SiRedux size="5em" />
                <p />
                <h4>REDUX</h4>
              </div>
              <div class="col-sm mt-3">
                <SiFirebase size="5em" />
                <p />
                <h4>FIREBASE</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
