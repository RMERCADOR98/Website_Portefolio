import React from "react";
//images
import logo from "../img/logo.png";
import iblog from "../img/iblog.png";
const Project3 = () => {
  return (
    <div className="project3" class="d-flex justify-content-around mt-5">
      <div
        className="project"
        style={{
          //   background: "#fffc5f",
          height: "20vh",
          width: "30vw",
        }}
      >
        {/* <h3>Lar App</h3> */}
        <div className="img">
          <img src={logo} alt="" style={{ width: "71%" }} />
        </div>
        <button type="button" class="btn btn-dark mt-5">
          See more
        </button>
      </div>

      <div
        className="project"
        style={{
          //   background: "#fffc5f",
          height: "20vh",
          width: "30vw",
        }}
      >
        {/* <h3>Iblog</h3> */}
        <div>
          <img src={iblog} alt="" style={{ width: "21.5vw" }} />
        </div>
        <button type="button" class="btn btn-dark mt-5">
          See more
        </button>
      </div>
    </div>
  );
};

export default Project3;
