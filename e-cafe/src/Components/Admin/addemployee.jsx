import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { Button, Alert } from "react-bootstrap";

export default function AddEmployee() {
    // Use States
    const [error, setError] = useState("");
    const [color, setColor] = useState("success");
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );

    // Alert Handler
    const handleClose = (event) => {
        document.getElementById("error").style.display = "none";
    };

    return (
        <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "17%" }}>
                <Sidebar />
            </div>
            <div style={{ width: "83%" }}>
                <Header />
                <div>
                    <center>
                        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Add Employee</h1>
                    </center>
                    <Alert variant={color} style={{ display: "none" }} id="error">
                        {error}{" "}
                        <a onClick={handleClose} style={{ color: "blue" }}>
                            close
                        </a>
                    </Alert>
                    <form
                    // style={{ margin: "30px", textAlign: "left" }}
                     id="add"
                    enctype="multipart/form-data"
                    method="post"
                    >
                        <center>
                            {
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    style={{
                                        width: "110px",
                                        height: "110px",
                                        borderRadius: "60px",
                                        marginBottom: "10px",
                                    }}
                                />
                            }
                            <input
                                type="file"
                                name="employeeimg"
                                id="employeeimg"
                                accept="image/*"
                                style={{ marginLeft: "10px" }}
                            />
                        </center>
                        <center>
                            <span id="image-error"></span>
                        </center>
                        <MDBRow className="align-items-center">
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="name"
                                    name="name"
                                    hint="Name"
                                />
                                <span id="name-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="email"
                                    name="email"
                                    hint="Email"
                                />
                                <span id="email-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="align-items-center">
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="contact"
                                    name="contact"
                                    hint="Contact"
                                />
                                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="cnic"
                                    name="cnic"
                                    hint="CNIC"
                                />
                                <span id="cnic-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="align-items-center">
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="salary"
                                    name="salary"
                                    hint="Salary"
                                />
                                <span id="salary-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <select
                                    style={{ marginTop: "-25px" }}
                                    id="role"
                                    name="role"
                                    hint="Role"
                                    label = "Role"
                                    className="form-select"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Cashier">Cashier</option>
                                </select>
                                <span id="role-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>
                        <span id="errorss" ></span>
                        <Button style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none' }} className="text-white" type="submit">
                            Add Employee
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
