import React, { useState, useEffect } from 'react';
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
import { Button } from "react-bootstrap";
import Navbar from './navbar';
import Footer from './footer';


export default function Order() {
    const [openNavColor, setOpenNavColor] = useState(false);
    const [orders, setOrders] = useState([]);

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
                <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> My Orders</h1>
            </center>
            <br />
            {orders && orders.length > 0 ? (
                <div>
                    <Button
                        style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none' }}
                        type="button"
                        className="mt-3"
                    >
                        Download Report
                    </Button>

                </div>
            ) : (
                <div>Loading...</div >
            )
            }
            <br /><br /><br />
            <Footer />
        </>
    );
}