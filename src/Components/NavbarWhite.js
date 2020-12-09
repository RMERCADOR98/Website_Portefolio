import { left } from "@popperjs/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class NavbarWhite extends Component {
  state = {
    classe: "hide", // musar para "hide" para ficar normal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  };

  showMenu = (e) => {
    e.preventDefault();
    this.setState({
      classe: "show",
    });
  };

  hideMenu = (e) => {
    e.preventDefault();

    this.setState({
      classe: "hide",
    });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-transparent ">
          <div class="container-fluid">
            <Link class="navbar-brand text-white" to="/">
              RM
            </Link>
            <form class="d-flex">
              <span
                class="navbar-toggler-icon "
                onClick={this.showMenu}
                style={{ cursor: "pointer" }}
              ></span>
            </form>
          </div>
        </nav>

        <div id="flyoutMenu" class={this.state.classe}>
          <div class="container-fluid">
            <div class="row" style={{ height: "70vh", zIndex: "1" }}>
              <div class="text-right">
                <h2
                  onClick={this.hideMenu}
                  style={{
                    cursor: "pointer",
                    zIndex: "2",
                    margin: "1rem 0.1rem 0.8rem 1rem",
                    padding: "0.4rem",
                    fontSize: "1.5rem",
                  }}
                >
                  X
                </h2>
              </div>
              <div class="col-sm-12 align-self-center justify-content-center text-center">
                <br />
                <h2>
                  <Link to="/">Home</Link>
                </h2>
                <p />
                <h2>
                  <Link to="/about">About</Link>
                </h2>
                <p />
                <h2>
                  <Link to="/projects">Projects</Link>
                </h2>
                <p />

                <h2>
                  <Link to="/contact">Contact</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarWhite;
