import React from "react";
import Footer from "../Footer";
import { useRouteMatch } from "react-router-dom";

import { BiDownArrowCircle } from "react-icons/bi";

//Projects
import Project1 from "./ProjectList/Project1";
import Project2 from "./ProjectList/Project2";
import Project3 from "./ProjectList/Project3";

const Projects = () => {
  return (
    <div>
      <div
        class=" justify-content-center text-center pt-5 container-fluid "
        style={{
          backgroundColor: "white ",
          minHeight: "100vh",
          color: "black",
          paddingBottom: "100px",
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

        <Project1 />

        {/* <Project2 /> */}
        {/* <Project3 /> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
{
  /* <Link to={`${url}project1`} style={{ textDecoration: "none", color: "black" }}>
  View Project
</Link>; */
}
