import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#E4E4E4", color: "black" }} class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h4>
              <b>Contact Me!</b>
            </h4>
            <HiMail size="1.5em" style={{ paddingBottom: "4px" }} />
            <span>rodrigosmercador@gmail.com</span>
            <br />
            <FaGithub size="1.2em" />
            &nbsp;&nbsp;
            <FaLinkedin size="1.2em" />
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
          <div class="col-sm">Harooo</div>
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
