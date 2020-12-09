import React from "react";

const Form = ({ state, handleChange, handleSubmit }) => {
  return (
    <form class="row g-4 pb-5" onSubmit={handleSubmit}>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange("name")}
        />
      </div>
      <div class="col-md-6">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange("email")}
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          id="subject"
          placeholder="Subject"
          value={state.subject}
          onChange={handleChange("subject")}
        />
      </div>
      <div class="col-12">
        <textarea
          type="text"
          class="form-control"
          id="Message"
          placeholder="Message"
          value={state.message}
          onChange={handleChange("message")}
          rows="6"
          style={{ resize: "none" }}
        />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-dark" onClick={handleSubmit}>
          Enviar
        </button>
      </div>

      {state.emailSent === true && <p className="sucess">Email Sent</p>}
      {state.emailSent === false && <p className="err">Email Not Sent</p>}
    </form>
  );
};

export default Form;
