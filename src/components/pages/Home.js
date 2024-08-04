import "../../css/index.css";

import React from "react";
import { ReactTyped } from "react-typed";

import Infobtn from "../common/Infobtns";
import Education from "../common/Education";
import Certifications from "../common/Certificates";
import logo from "../../assets/images/logo.jpg";
import Skills from "../../components/common/Skills";


const Home = () => {
  return (
    <div className=" container-fluid text-black d-flex justify-content-center align-items-center text-center ">
      <div className="container pt-3 ">
            <img
              src={logo}
              alt="Arwa"
              className="rounded-circle img-fluid"
              width="300"
              height="300"
            />

            <p className="fs-3 opacity-75">
              Welcome to{" "}
              <ReactTyped
                strings={["My Website ", "My Portfolio ", "My Page"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </p>


            <p className="fs-4 opacity-75">
              My Name is Arwa Alkhathlan I'm a passionate programmer, and I'm
              eager to translate my ideas into real life as best as I could.
            </p>

          <Infobtn />

          <Education />
          <Skills />
          <Certifications />
        </div>
      </div>
  );
};

export default Home;
