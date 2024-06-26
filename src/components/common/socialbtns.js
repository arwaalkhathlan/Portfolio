import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const socialbtns = () => {
  return (
    <>
      <p class="d-flex justify-content-center align-items-center"> On My Socials</p>
      <div class="d-flex justify-content-center align-items-center">
        <MDBBtn className="m-1" style={{ backgroundColor: "#55acee" }} href="#">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn className="m-1" style={{ backgroundColor: "#0082ca" }} href="#">
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn className="m-1" style={{ backgroundColor: "#333333" }} href="#">
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </div>
    </>
  );
};

export default socialbtns;
