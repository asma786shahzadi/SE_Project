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
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBTypography,
  MDBInput,

} from 'mdb-react-ui-kit';
import Navbar from './navbar';
import Footer from './footer';



export default function Cart() {
  
  const [openNavColor, setOpenNavColor] = useState(false);
  const [data, setData] = useState([]);

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
        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}>My Cart</h1>
      </center>

      <MDBContainer fluid>
        <MDBRow className="justify-content-center mb-0">
          {data && data.length > 0 ? (
              data.map((item, index) => (
                <MDBCol md="12" xl="10" key={index}>
                  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <MDBCardImage
                              src={`http://localhost:4000/images/${item.ProductImage}`}
                              fluid
                              className="w-100"
                              style={{ maxHeight: "20rem", objectFit: "fit" }}
                            />
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md="12" lg="6">
                          <h3 style={{ color: "blue" }}>{item.productName}</h3>
                          <h4>{item.productSize}</h4>
                          <div className="d-flex flex-row align-items-center">
                          </div>
                          <center>
                            <p style={{ fontSize: "18px" }}>
                              {item.productDescription}
                            </p>
                          </center>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
                          <div className="d-flex flex-row align-items-center mb-1">
                            <center>
                              <h4 className="mb-1 me-1" style={{ paddingLeft: '50px' }}>
                                Total: Rs {item.productPrice * quantities[index]}
                              </h4>
                            </center>

                          </div>
                          <div className="d-flex flex-column mt-4">
                            <div className="d-flex flex-row align-items-center">


                              <div style={{ width: "300px" }}>
                                <MDBInput
                                  type="number"
                                  label="Quantity"
                                  min="1"
                                  size="sm"
                                />
                              </div>
                              <div >
                                <MDBTypography tag="h6" className="mb-0">
                                  Rs {item.ProductPrice}
                                </MDBTypography>
                              </div>
                            </div>
                            <button
                              type="button"
                              size="sm"
                              className="btn bg-primary btn-block mb-1 mt-20"
                              style={{ fontSize: "15px" }}
                            >
                              Buy Product
                            </button>
                            <button
                              type="button"
                              size="sm"
                              className="btn bg-warning btn-block mb-4 mt-20"
                              style={{ fontSize: "15px" }}
                            >
                              Remove From Cart
                            </button>
                            <span id='erros'></span>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
          ) : (
            <div>Loading...</div>
          )}
        </MDBRow>
      </MDBContainer>


      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}