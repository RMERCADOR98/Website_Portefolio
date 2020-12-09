import React from "react";
//Logo
import iblog from "../img/iblog.png";

const Project2 = () => {
  return (
    <div style={{ color: "black" }}>
      <section className="Projects" class="container pt-5">
        <div className="projeto1" class="text-left px-5">
          <div className="title">
            <h2>IBlog</h2>
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
              background: "#000",
              height: "45vh",
            }}
          >
            <div
              className="logo"
              class="d-flex justify-content-center align-items-center text-center"
              style={{ height: "45vh" }}
            >
              <img src={iblog} style={{ height: "45vh" }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project2;
