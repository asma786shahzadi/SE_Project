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


export default function Products() {
    const [openNavColor, setOpenNavColor] = useState(false);
    const [products, setproducts] = useState([]);
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
                <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Food Items</h1>
            </center>
            <div class="row">
                {products.map((product, index) => (
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <div
                                class="bg-image hover-zoom ripple"
                                data-mdb-ripple-color="light"
                            >
                                <img
                                    src={`http://localhost:4000/images/${product.image}`}
                                    class="w-100"
                                    alt="Product Image"
                                    style={{ height: "180px" }}
                                />
                                <a href="#!">
                                    <div class="hover-overlay">
                                        <div
                                            class="mask"
                                            style={{
                                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                                            }}
                                        ></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a style={{ textDecoration: 'none' }} class="text-reset">
                                    <h5 class="card-title mb-3">
                                        Product Name : {product.name}
                                    </h5>
                                    <p
                                        style={{
                                            marginTop: "-10px",
                                        }}
                                    >
                                        Product Size : {product.size}
                                    </p>
                                </a>
                                <a style={{ textDecoration: 'none' }} class="text-reset">
                                    <p style={{
                                        marginTop: "-10px",
                                        color: 'red',
                                        fontWeight: 'bold'
                                    }}
                                    >Product Price : {product.price} Rs</p>
                                </a>
                                <a
                                    href={`http://localhost:3000/productdetails/${product._id}`}
                                >
                                    <button
                                        type="button"
                                        class="btn"
                                        style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none', marginLeft: "5px" }}
                                    >
                                        View Details
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}