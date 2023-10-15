import React, { useState } from "react";
import { MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBCol, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { Button, Modal, Alert } from "react-bootstrap";

export default function ViewEmployee() {
    const [employees, setEmployees] = useState([]);
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );

    const [error, setError] = useState("");
    const [color, setColor] = useState("success");
    const [show, setShow] = useState(false);
    const handleClose = (event) => {
        document.getElementById("error").style.display = "none";
    };
    const handleCloseModal = () => setShow(false);
    function handleShow(
    ) {
        setShow(true);
    }

    return (
        <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "17%" }}>
                <Sidebar />
            </div>
            <div style={{ width: "83%" }}>
                <Header />
                <div>
                    <center>
                        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> View Employee</h1>
                    </center>
                    <MDBRow style={{ margin: "30px", overflowX: "auto" }}>
                        <MDBTable striped hover responsive>
                            <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>CNIC</th>
                                    <th>Salary</th>
                                    <th>Role</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {employees && employees.length > 0 ? (
                                    employees.map((employee) => (
                                        <tr key={employee._id}>
                                            <td><img src={`http://localhost:4000/images/${employee.image}`} style={{ width: '100px', height: '100px' }} alt={employee.name} /></td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.contact}</td>
                                            <td>{employee.cnic}</td>
                                            <td>{employee.salary}</td>
                                            <td>{employee.role}</td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow()
                                                }>
                                                    Update
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="me-2"
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    variant={employee.active ? 'success' : 'warning'}
                                                    size="sm"
                                                >
                                                    {employee.active ? 'Active' : 'Inactive'}
                                                </Button>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">Loading...</td>
                                    </tr>
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBRow>

                    {/* Modal to update employee Details */}
                    <Modal
                        show={show}
                        onHide={handleCloseModal}
                        dialogClassName="modal-90w"
                        size="lg"
                        id="updatemodal"
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Update Employee
                            </Modal.Title>
                        </Modal.Header>
                        <Alert variant={color} style={{ display: "none" }} id="error">
                            {error}{" "}
                            <a href="#!" onClick={handleClose} style={{ color: "blue" }}>
                                close
                            </a>
                        </Alert>
                        <form
                            style={{ margin: "30px", textAlign: "left" }}
                            id="addemployee"
                            onSubmit={handleEmployee
                            }
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
                                    <label>Name</label>
                                    <MDBInput
                                        id="name"
                                        name="name"
                                        hint="Name"
                                    />
                                    <span id="name-error" style={{ marginTop: "-15px" }}></span>
                                </MDBCol>
                                <MDBCol md="6">
                                    <label>Email</label>
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
                                    <label>Contact</label>
                                    <MDBInput
                                        id="contact"
                                        name="contact"
                                        hint="Contact"
                                    />
                                    <span
                                        id="contact-error"
                                        style={{ marginTop: "-15px" }}
                                    ></span>
                                </MDBCol>
                                <MDBCol md="6">
                                    <label>CNIC</label>
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
                                    <label>Salary</label>
                                    <MDBInput
                                        id="salary"
                                        name="salary"
                                        hint="Salary"
                                    />
                                    <span
                                        id="salary-error"
                                        style={{ marginTop: "-15px" }}
                                    ></span>
                                </MDBCol>
                                <MDBCol md="6">
                                    <label></label>
                                    <select
                                        style={{ marginTop: "-25px" }}
                                        id="role"
                                        name="role"
                                        hint="Role"
                                        label="Role"
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
                                Update Employee
                            </Button>
                        </form>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
