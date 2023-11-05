import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

function Register() {

    return (
        <MDBContainer className="my-5">

            <MDBCard className='imgback' >
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div style={{ marginLeft: '150px' }} className='d-flex flex-row mt-2'>
                                <img
                                    src="E-Cafe-logos_transparent.png"
                                    alt="logo"
                                    style={{ width: "50px", height: "50px" }}
                                ></img>
                                <span style={{ color: '#BEAFAF' }} className="h1 fw-bold mb-0">E-Cafe</span>
                            </div>
                            <h5 className="fw-bold my-4 pb-3" style={{ color: '#BEAFAF', letterSpacing: '1px' }}>Welcome to E-Cafe Registration Portal</h5>
                            {/* value={name} onChange={(e) => setname(e.target.value)} */}
                            <MDBInput required contrast wrapperClass="mb-4"  label="Name" id="name" type="text" size="lg" />
                            <MDBInput required contrast wrapperClass="mb-4"  label="Address" id="address" type="text" size="lg" />
                            <MDBInput required contrast wrapperClass="mb-4"  label="Username" id="username" type="email" size="lg" />
                            <MDBInput required contrast wrapperClass="mb-4"  label="Email address" id="email" type="email" size="lg" />
                            <MDBInput required contrast wrapperClass="mb-4"  label="Password" id="password" type="password" size="lg" />
                            <MDBInput required contrast wrapperClass="mb-4" label="Confirm Password" id="cpassword" type="password" size="lg" />
                            <span id="error"></span>
                            <MDBBtn style={{ boxShadow: 'none', backgroundColor: "#CCB7A9" }} block className="my-4">
                                Register
                            </MDBBtn>
                            <p className="mb-5 pb-lg-2" style={{ color: '#BEAFAF' }}>Already have an account<Link style={{ fontWeight: 'bold', color: '#CCB7A9' }} to="/login">Login</Link>
                            </p>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default Register;