import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import api from "../Api";
import { Link } from "react-router-dom";
export default function Signup() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    var res = api
      .post("signup", {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(fname, lname, email, password);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <div style={{ maxWidth: "500px" }}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="form3Example1"
              label="First name"
              autoComplete="off"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="form3Example2"
              label="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              autoComplete="off"
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          id="form3Example3"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <MDBInput
          className="mb-4"
          id="form3Example4"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />

        <MDBBtn type="submit" className="mb-4" onClick={handleSubmit} block>
          Sign Up
        </MDBBtn>

        <div className="text-center">
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
