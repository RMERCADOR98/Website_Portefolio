import React from "react";
import { BiDownload } from "react-icons/bi";
import "./About.css";

//Animation
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import { SiRedux } from "react-icons/si";
import {
  SiFirebase,
  SiCinema4D,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
} from "react-icons/si";

import Footer from "../Footer";

const About = () => {
  return (
    <div style={{ background: "#fff" }}>
      <motion.div
        class="d-flex justify-content-center text-center pt-5 container-fluid"
        style={{
          backgroundColor: "white ",
          minHeight: "100vh",
          color: "black",
        }}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="AboutText">
          <section className="MainText">
            <h3>
              Ready to take new challenges and test my skills to their best!
            </h3>
          </section>

          <section className="SubText" class="pt-5 mt-2">
            <p>
              I´m a Portuguese Web Developer looking to take new challenges!
            </p>
            <br />
            <p>
              I´m very curious about everything that surrounds me and nowadays
              we live in a world <br />
              dominated by the internt, so i felt in love by the way a website
              can change the prespective <br />
              of any person when it is well executed.{" "}
            </p>
            <p>Load times ans simple(but visual) content is the key!</p>
          </section>
          <section>
            <a
              href="https://drive.google.com/file/d/1hQJjcyf6TRFHBeOGoY_uskxH6zuKIcq5/view?usp=sharing"
              target="_blank"
            >
              <button
                type="button"
                class="btn btn-transparent btn-outline-dark mt-4"
              >
                My Resume &nbsp; &nbsp;
                <BiDownload size="1.2em" />
              </button>
            </a>
          </section>

          <section className="Skills" class="pt-5 mt-5 mb-5">
            <div className="Title1">
              <h2>
                <b>Skills</b>
              </h2>
            </div>
            <div className="Icons" class="container mt-5">
              <div class="row">
                <div class="col-sm">
                  <DiHtml5 size="5em" />

                  <p />
                  <h4>HTML5</h4>
                </div>
                <div class="col-sm">
                  <DiCss3 size="5em" />

                  <p />
                  <h4>CSS3</h4>
                </div>
                <div class="col-sm">
                  <DiJavascript1 size="5em" />

                  <p />
                  <h4>Javascript</h4>
                </div>
                <div class="col-sm">
                  <DiNodejsSmall size="5em" />

                  <p />
                  <h4>Node</h4>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-sm">
                  <DiReact size="5em" />

                  <p />
                  <h4>REACT</h4>
                </div>
                <div class="col-sm mt-3">
                  <SiRedux size="3em" />
                  <p />
                  <h4>REDUX</h4>
                </div>
                <div class="col-sm mt-3">
                  <SiFirebase size="3em" />
                  <p />
                  <h4>FIREBASE</h4>
                </div>
              </div>
            </div>
            <div className="Title1" class="pt-5 mt-5">
              <h2>
                <b>Other Skills</b>
              </h2>
            </div>
            <div className="Icons" class="container mt-5 pt-3">
              <div class="row">
                <div class="col-sm">
                  <SiCinema4D size="5em" />

                  <p />
                  <h4>Cinema 4D</h4>
                </div>
                <div class="col-sm">
                  <SiAdobeillustrator size="5em" />

                  <p />
                  <h4>Adobe Illustrator</h4>
                </div>
                <div class="col-sm">
                  <SiAdobexd size="5em" />

                  <p />
                  <h4>Adobe XD</h4>
                </div>
                <div class="col-sm">
                  <SiFigma size="5em" />

                  <p />
                  <h4>Figma</h4>
                </div>
              </div>
            </div>
          </section>
          <div class="p-5">
            <p>
              You can also check my
              <a
                href="https://drive.google.com/file/d/1S8gzAlS4XTSf6HVHref4cXJIsGIiKA_n/view?usp=sharing"
                target="blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span>
                  <b> Diploma </b>
                </span>
              </a>
              and
              <a
                href="https://drive.google.com/file/d/1a2wHVCd9RDanQiTOcZY0z6aeQQykmy69/view?usp=sharing"
                target="blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span>
                  <b> Suplement</b>
                </span>
              </a>{" "}
            </p>
          </div>
        </div>
      </motion.div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
