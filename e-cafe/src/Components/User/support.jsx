import React, { useState , useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import Navbar from './navbar';
import Footer from './footer';


export default function Support() {
  const [openNavColor, setOpenNavColor] = useState(false);
  return (
    <>
      <Navbar />
      <MDBNavbar expand='lg' className='nav-color' >
        <MDBContainer style={{ marginTop: '10px', marginBottom: '10px' }} fluid>
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
        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Customer Support & FeedBack</h1>
      </center>

      <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 text-start">
              <div>
                <p className="mb-1">
                  <strong>Standard length question?</strong>
                </p>
                <p className="mb-1">
                  <u>Higlighted short answer.</u> And some kind of detailed list.
                </p>
                <ul>
                  <li>list item 1</li>
                  <li>list item 2</li>
                  <li>list item 3</li>
                </ul>
              </div>

              <div>
                <p className="mb-1">
                  <strong>Short question?</strong>
                </p>
                <p className="mb-1">
                  <u>Higlighted short answer.</u>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong>
                    The longest question in this faq. Made up of two sentences in
                    order to span to the next line?
                  </strong>
                </p>
                <p className="mb-1">
                  <u>Higlighted short answer.</u>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong>Slightly longer question?</strong>
                </p>
                <p className="mb-1">
                  <u>Higlighted short answer.</u>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="6" md="12" className="text-center">
              <p>
                <span class="fw-bold">
                  Still have any questions? Contact us to get your answer!
                </span>
              </p>

              <form>
                <MDBInput id='name' label="Your Name" required className="mb-4" />
                <MDBInput id='email' label="Email address" required className="mb-4" />
                <MDBInput id='subject' label="Mail Subject" required className="mb-4" />
                <MDBTextArea id='message' rows={4} label="Message" required className="mb-4" />
                <MDBBtn block style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none'}} >Send</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
          <br />
      </MDBContainer>
      <Footer />
    </>
  );
}