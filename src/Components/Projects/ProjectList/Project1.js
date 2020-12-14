import React from "react";
//Logo
import logo from "../img/logo.png";

const Project1 = () => {
  return (
    <div style={{ color: "black" }}>
      <section className="Projects" class="container pt-5">
        <div className="projeto1" class="text-left px-5">
          <div className="title">
            <h2>Lar App</h2>
          </div>
          <div
            className="line"
            style={{
              background: "black",
              height: "0.2rem",
              width: "100%",
              marginBottom: "2rem",
            }}
          />
          <div
            className="project"
            style={{
              //  background: "#fdfdc1",
              height: "45vh",
            }}
          >
            {" "}
            <a
              href="https://projetofinal.now.sh/"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <div
                className="logo"
                class="d-flex justify-content-center align-items-center text-center"
                style={{ height: "45vh" }}
              >
                <img src={logo} style={{ height: "45vh" }} alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project1;
