import React, { useState,useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import logo from '../images/logo2.png'
import { useSelector,useDispatch } from "react-redux";
import {signin,logout} from '../redux/authSlice'

export default function Navbar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [token,setToken] = useState();
  const state = useSelector((state)=>state?.auth.token)
  console.log(state);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [state])
  console.log("token---->",token)
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''><img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            /></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link to="/crud">CRUD</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link to="/contact">Contact</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link to="/multiform">MultiForm</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                {!token ?<Link to="/login">Login</Link>:<button onClick={handlelogout}>LogOut</button>}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link to="/register">Register</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}