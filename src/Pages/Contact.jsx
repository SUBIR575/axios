import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getalluser, updateUser } from "../redux/counterSlice";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import api from "../Api";
const Contact = () => {
  const dispatch = useDispatch();
  const [centredModal, setCentredModal] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [job, setJob] = useState();
  const [home, setHome] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState(false);
  const [id, setId] = useState();
  const [total,setTotal] = useState();
  const handleSubmit = () => {
    if (name && age && job && home) {
      dispatch(
        createUser({
          name,
          age,
          job,
          home,
          email,
        })
      );
      setData(!data);
    }
    // axios
    //   .get("http://localhost:5000/user")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    
  };
  useEffect(() => {
    dispatch(getalluser());
  }, [data]);
  const state = useSelector((state) => state?.user.allUsers);
  console.log(state);
  const toggleShow = (item) => {
    setName(item.name);
    setJob(item.job);
    setHome(item.home);
    setAge(item.age);
    setEmail(item.email);
    setId(item.id);
    setCentredModal(!centredModal);

  };
  const update = () => {
    let data = {
      name:name,
      age:age,
      job:job,
      home:home,
      email:email,
    };
    console.log({data});
    if(data !== undefined) {
    dispatch(updateUser({id,data}));
    }
// api.patch(`/user/${id}`,data).then((i)=>{
//   console.log(i);
// }).catch((err)=>console.log(err));
  };
  
  return (
    <>
      <div className="main">
        <div className="form ">
          <label>Name:</label>
          <br />
          <input
            type="text"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Age:</label>
          <br />
          <input
            type="number"
            placeholder="age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <label>Job:</label>
          <br />
          <input
            type="text"
            placeholder="job"
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <br />
          <label>Home:</label>
          <br />
          <input
            type="text"
            placeholder="Home"
            required
            value={home}
            onChange={(e) => setHome(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              margin: "10px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
        <div className="list">
          <table>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>job</th>
              <th>Action</th>
            </tr>
            {state?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.job}</td>
                <td style={{ textAlign: "center" }}>
                  <div
                    onClick={() => toggleShow(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <i class="fas fa-cog fa-pulse"></i>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="First Name"
                id="form1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <MDBInput
                label="Job"
                id="form1"
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
              <br />
              <MDBInput
                label="Age"
                id="form1"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <br />
              <MDBInput
                label="Home"
                id="form1"
                type="text"
                value={home}
                onChange={(e) => setHome(e.target.value)}
              />
              <br />
              <MDBInput
                label="Email"
                id="form1"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={update}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default Contact;
