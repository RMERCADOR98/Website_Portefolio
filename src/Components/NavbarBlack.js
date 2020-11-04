import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class NavbarBlack extends Component {
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

        <div id="flyoutMenu" class={this.state.classe}>
          <div class="container-fluid">
            <div class="row" style={{ height: "100vh" }}>
              <div class="col-sm-12 align-self-center justify-content-center text-center">
                <span onClick={this.hideMenu} style={{ cursor: "pointer" }}>
                  X
                </span>
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

// const NavbarBlack = ({ showMenu }) => {
//   return (
//     <nav class="navbar navbar-light bg-white ">
//       <div class="container-fluid">
//         <Link class="navbar-brand text-black" to="/">
//           RM
//         </Link>

//         <form class="d-flex">
//           <span
//             class="navbar-toggler-icon"
//             onClick={showMenu}
//             style={{ cursor: "pointer" }}
//           ></span>
//         </form>
//       </div>
//     </nav>
//   );
// };

export default NavbarBlack;
