import React from "react";
import "../../css/index.css";

const Projects = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">Projects</h1>
        <p className="fs-5 opacity-75">
            the projects are on the Way!!</p>
      <div className="d-flex justify-content-center align-items-center">
        <ul className="list-unstyled d-flex flex-column align-items-center">
          <li className="mb-4">
            <div className="loader">
              <div className="child"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
