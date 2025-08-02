import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="homepage-desc">
        <h1 className="poppins-semibold" id="name">
          Hi! I am Aaheli Ghosh
        </h1>
        <h2 className="poppins-regular" id="std">
          Student | Web Developer
        </h2>
        <h3 className="poppins-regular">
          I am pursuing B.Tech CSE from Sikkim Manipal Institute of Technology.
          Currently I am in the third year and am trying to be a frontend
          developer. This is an ongoing effort to learn different things. This
          portfolio is a collection of the progress I have made so far.
        </h3>
        <br />
        <div className="resume">
          <a
            href={`${import.meta.env.BASE_URL}resume_aaheli.pdf`}
            download
            className="btn poppins-regular"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
