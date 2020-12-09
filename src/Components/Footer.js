import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#E4E4E4", color: "black" }} class="pt-4 ">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h4>
              <b>Contact Me!</b>
            </h4>
            <HiMail size="1.5em" style={{ paddingBottom: "4px" }} />
            <span>rodrigosmercador@gmail.com</span>
            <br />
            <div style={{ paddingLeft: "0.15rem" }}>
              <a
                href="https://github.com/RMERCADOR98"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaGithub size="1.2em" />
              </a>
              &nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/rodrigo-mercador-a904221b0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <FaLinkedin size="1.2em" />
              </a>
            </div>
          </div>
          <div class="col-sm">
            <h4>
              <b>Navigation</b>
            </h4>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
            <br />
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
            <br />
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </Link>
            <br />
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </div>
          <div class="col-sm"></div>
        </div>
        <span class="text-center justify-content-center d-flex pt-4 pb-2">
          2020 Copyright &nbsp;{" "}
          <span>
            <BiCopyright />
          </span>
          &nbsp;<b>Rodrigo Mercador</b>
        </span>
      </div>
    </div>
  );
};

export default Footer;
