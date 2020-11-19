import React, { Component } from "react";
import NavbarBlack from "../NavbarBlack";
import Footer from "../Footer";
import Form from "./Form";

import Axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    btn: false,
    emailSent: null,
  };

  handleChange = (input) => (e) => {
    e.preventDefault();
    // console.log(e);
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      btn: true,
      // emailSent: true,
    });
    // Axios.post("https://portefolio-api.herokuapp.com/api/email", this.state)
    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.sucess) {
          this.setState({
            btn: false,
            emailSent: true,
          });
        } else {
          this.setState({
            btn: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          btn: false,
          emailSent: false,
        });
      });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="NavBar">
          <NavbarBlack />
        </div>

        <div
          class=" justify-content-center text-center pt-5 container-fluid "
          style={{
            backgroundColor: "white ",
            minHeight: "82.5vh",
            color: "black",
          }}
        >
          <div className="AboutText">
            <section className="MainText">
              <h3>Let´s make something great!</h3>
            </section>

            <section className="SubText" class="pt-5 mt-2">
              <p>Feel free to contact me.</p>
              <br />
              <p>
                I´m always open to work in new projects with new people.
                <br />
                Sharing experiences and knoledge is the way to sucess!
              </p>
            </section>
            <section class="container pt-5 mt-5" style={{ width: "60%" }}>
              <Form
                handleSubmit={this.handleSubmit}
                state={this.state}
                handleChange={this.handleChange}
              />
            </section>
          </div>
        </div>
        <div class="footer" style={{ marginTop: "auto" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
