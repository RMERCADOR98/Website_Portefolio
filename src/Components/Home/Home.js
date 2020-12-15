import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import { icons } from "../animations";
//Style
import "./home.css";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        class="container-fluid"
      >
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
              <motion.div
                variants={icons}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <a
                  href="https://github.com/RMERCADOR98"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <FaGithub
                    id="git"
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
                    id="in"
                    size="2em"
                    style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
