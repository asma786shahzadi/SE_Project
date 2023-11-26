import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
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

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var add = true;
        if (email == "") {
            add = false;
            document.getElementById("email-error").style.display = "block";
            document.getElementById("email-error").innerHTML =
                "Email is required field";
            document.getElementById("email-error").style.color = "red";
        } else {
            document.getElementById("email-error").style.display = "none";
        }
        if (password == "") {
            add = false;
            document.getElementById("password-error").style.display = "block";
            document.getElementById("password-error").innerHTML =
                "Email is required field";
            document.getElementById("password-error").style.color = "red";
        } else {
            document.getElementById("password-error").style.display = "none";
        }
        if (add == true) {
            const Data = {
                Email: email,
                Password: password,
            }
            console.log(Data)
            const respone = await axios.post('http://localhost:4000/login', Data)
            if (respone.data.message === "Invalid credentials") {
                document.getElementById("error").innerHTML = "USER DOESNOT EXISTS";
                document.getElementById("error").style.color = "red";
                document.getElementById("error").style.display = "block";
            }
            else if (respone.data.message === "Login Admin successful") {
                document.getElementById("error").innerHTML = "LOGIN ADMIN SUCCESSFULLY";
                document.getElementById("error").style.color = "green";
                document.getElementById("error").style.display = "block";
                setTimeout(() => {
                    localStorage.setItem("useremail", email);
                    localStorage.setItem("role", "Admin");
                    Cookies.set("token", respone.data.token, { expires: 1 });
                    window.location.href = "/adminhome";
                }, 2000);
            }
            else {
                document.getElementById("error").innerHTML = "LOGIN SUCCESSFULLY";
                document.getElementById("error").style.color = "green";
                document.getElementById("error").style.display = "block";
                setTimeout(() => {
                    localStorage.setItem("useremail", email);
                    localStorage.setItem("role", "User");
                    Cookies.set("token", respone.data.token, { expires: 1 });
                    // var Uemail =localStorage.getItem("useremail");
                    window.location.href = "/";
                }, 2000);
            }
        }

    };

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
                            <h5 className="fw-bold my-4 pb-3" style={{ color: '#BEAFAF', letterSpacing: '1px' }}>Welcome Back!</h5>
                            <MDBInput required contrast wrapperClass="mb-4" value={email} onChange={(e) => setemail(e.target.value)} label="Email address" id="email" type="email" size="lg" />
                            <span id="email-error"></span>
                            <MDBInput required contrast wrapperClass="mb-4" value={password} onChange={(e) => setpassword(e.target.value)} label="Password" id="password" type="password" size="lg" />
                            <span id="password-error"></span>
                            <span id="error"></span>
                            <MDBBtn onClick={handleSubmit} style={{ boxShadow: 'none', backgroundColor: "#CCB7A9" }} block className="my-4">
                                Login
                            </MDBBtn>
                            <p className="mb-5 pb-lg-2" style={{ color: '#BEAFAF' }}>Don't have an account<Link style={{ fontWeight: 'bold', color: '#CCB7A9' }} to="/register">Register</Link>
                            </p>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default Login;