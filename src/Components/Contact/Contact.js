import React from "react";
import NavbarBlack from "../NavbarBlack";
import Footer from "../Footer";
const Contact = () => {
  return (
    <div>
      <div className="NavBar">
        <NavbarBlack />
      </div>
      <div
        class=" justify-content-center text-center pt-5 container-fluid "
        style={{
          backgroundColor: "white ",
          minHeight: "100vh",
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
            <form class="row g-4">
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Email"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Subject"
                />
              </div>
              <div class="col-12">
                <textarea
                  type="text"
                  class="form-control"
                  id="Message"
                  placeholder="Message"
                  rows="6"
                />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div class="footer" style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
