import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingapidata } from "../redux/Action";
import Card from "../Components/Card";
import axios from "axios";
import {createactor,getallactors,updateactor,deleteactor} from '../redux/userSlice'
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
const About = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [id, setId] = useState();
  const [centredModal, setCentredModal] = useState(false);
  const [create,setCreate] = useState(false);
  const [createFirstName,setCreateFirstName] = useState();
  const [createLastName,setCreateLastName] = useState();
  const state = useSelector((state) => state?.actor.allactors);
  console.log("state---->", state);
  const toggleshow2 = ()=>{
    setCreate(!create)
  }
  const toggleShow = (item) => {
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setId(item.actor_id);
    setCentredModal(!centredModal);
  };
  const update = () => {
    let rModel = {
      first_name: firstname,
      last_name: lastname,
    };
    // api
    //   .put(`actors/${id}`, rModel)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setData(json);
    //   });
    dispatch(updateactor({id,rModel}))
  };
  useEffect(() => {
    // var alldata = api.get("actors/all")
    //   .then((res) => setData(res?.data))
    //   .catch((err) => console.log(err));
    dispatch(getallactors());
  }, [centredModal]);
  const createActor = ()=>{
    let rModel ={
      first_name:createFirstName,
      last_name:createLastName
    }
    // api.post('actors',rModel)
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err))
    dispatch(createactor(rModel));
  }
  const deleteItem=(item)=>{
    dispatch(deleteactor(item.actor_id))
  // api.delete(`actors/${item.actor_id}`)
  // .then((res)=>console.log(res))
  // .catch((err)=>console.log(err))
  }
  return (
    <>
      <MDBContainer fluid>
        <MDBRow style={{margin:'30px'}}>
          <MDBTable>
            <MDBBtn color="danger" tag="a" size='lg' floating className="float-btn" onClick={toggleshow2}>
            <MDBIcon fas icon="plus-circle" size='2x' />
            </MDBBtn>
            <MDBTableHead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {state
                ? state?.map((item, index) => (
                    <tr key={item.actor_id}>
                      <th>{index}</th>
                      <td>{item?.first_name}</td>
                      <td>{item?.last_name}</td>
                      <td>
                        <div className="btn-table">
                          <div>
                            <MDBIcon
                              fas
                              icon="edit"
                              style={{ cursor: "pointer" }}
                              onClick={() => toggleShow(item)}
                            />
                          </div>
                          <div>
                            <MDBIcon
                              far
                              icon="trash-alt"
                              style={{ cursor: "pointer", marginLeft: "5px" }}
                              onClick={()=>deleteItem(item)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </MDBTableBody>
          </MDBTable>
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
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <br />
                  <MDBInput
                    label="Last Name"
                    id="form1"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
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
          <MDBModal tabIndex="-1" show={create} setShow={setCreate}>
            <MDBModalDialog centered>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Create Actor</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleshow2}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBInput
                    label="First Name"
                    id="form1"
                    type="text"
                    value={createFirstName}
                    onChange={(e) => setCreateFirstName(e.target.value)}
                  />
                  <br />
                  <MDBInput
                    label="Last Name"
                    id="form1"
                    type="text"
                    value={createLastName}
                    onChange={(e) => setCreateLastName(e.target.value)}
                  />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={toggleshow2}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={createActor}>Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default About;
