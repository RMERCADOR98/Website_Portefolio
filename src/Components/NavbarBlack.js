import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

//NAVBAR COM LETRAS PRETAS

class NavbarBlack extends Component {
  state = {
    classe: "hide", // musar para "hide" para ficar normal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  };

  showMenu = (e) => {
    e.preventDefault();

    this.setState({
      classe: "show",
    });
    document.body.style.overflow = "hidden";
  };

  hideMenu = (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    this.setState({
      classe: "hide",
    });
  };

  render() {
    const location = this.props.location.pathname;
    return (
      <div>
        {location !== "/" ? (
          <nav class="navbar navbar-light bg-white ">
            <div class="container-fluid">
              <Link class="navbar-brand text-black" to="/">
                RM
              </Link>

              <form class="d-flex">
                <span
                  class="navbar-toggler-icon"
                  onClick={this.showMenu}
                  style={{ cursor: "pointer" }}
                ></span>
              </form>
            </div>
          </nav>
        ) : (
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
        )}

        <div id="flyoutMenu" class={this.state.classe}>
          <div class="container-fluid">
            <h2
              class="text-right"
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
            <div class="row" style={{ height: "80vh", zIndex: "1" }}>
              <div class="col-sm-12 align-self-center justify-content-center text-center">
                <br />
                <h2 onClick={this.hideMenu}>
                  <Link to="/">Home</Link>
                </h2>
                <p />
                <h2 onClick={this.hideMenu}>
                  <Link to="/about">About</Link>
                </h2>
                <p />
                <h2 onClick={this.hideMenu}>
                  <Link to="/projects">Projects</Link>
                </h2>
                <p />

                <h2 onClick={this.hideMenu}>
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

export default NavbarBlack;
