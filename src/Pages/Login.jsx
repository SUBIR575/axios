import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import {signin,logout} from '../redux/authSlice'
import api from "../Api";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    // var res = api.post('login',{
    //     email:email,
    //     password:password
    // })
    // .then((response)=>console.log(response))
    // .catch((error) => console.error(error))
    let rModal = {
    email:email,
    password:password
    }
    dispatch(signin(rModal))
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
      <div className="login-form">
        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="Email address"
          autoComplete="off"
          value={email}
          onChange={changeEmail}
        />
        <MDBInput
          className="mb-4"
          id="form1Example2"
          label="Password"
          value={password}
          onChange={changePassword}
          autoComplete="off"
        />
        <MDBBtn type="submit" onClick={handleSubmit} block>
          Sign in
        </MDBBtn>
      </div>
    </div>
  );
}
