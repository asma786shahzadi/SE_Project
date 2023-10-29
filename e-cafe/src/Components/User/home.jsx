import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Navbar from './navbar';
import Footer from './footer';


export default function Home() {
  const [openNavColor, setOpenNavColor] = useState(false);
  return (
    <>
      <Navbar />
      <MDBNavbar expand='lg' className='nav-color' >
        <MDBContainer style={{marginTop:'10px',marginBottom:'10px'}} fluid>
          <MDBNavbarBrand className='nav-text-color' href='#'></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/'>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/products'>Products</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/seatreservation'>Seat Reservation</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/myorders'>My Orders</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/cart'>My Cart</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='nav-text-color' href='/support'>Customer Support & FeedBack</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <center>
        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Home Page</h1>
      </center>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}