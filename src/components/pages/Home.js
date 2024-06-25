// src/Home.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className=" bg-dark text-white vh-100 d-flex justify-content-center align-items-center text-center">
      <div className="container">
        <div className="main-text justify-content-center align-items-center ">
          <p class=" fs-3 opacity-75 ">
            Welcome to{" "}
            <ReactTyped
              strings={["My Website ", "My Portfolio ", "My Page"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              showCursor={true}
            />
          </p>

          <p class="fs-4 opacity-75 ">
            <ReactTyped
              strings={[
                "My Name is Arwa Alkhathlan </br> I'm a passionate programmer, and I'm eager to translate my ideas into real life as best as i could. ",
              ]}
              typeSpeed={100}
              showCursor={true}
            />
          </p>
        </div>

        <div class="p-3">
          <button type="button" class="btn btn-outline-light btn-lg m-2">
            Education
          </button>
          <button type="button" class="btn btn-outline-light btn-lg m-2">
            Resume
          </button>
          <button type="button" class="btn btn-outline-light btn-lg m-2">
            Certificates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
