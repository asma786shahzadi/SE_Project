import React, { useEffect, useState } from "react";
import { MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBCol, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { Button, Modal, Alert } from "react-bootstrap";

export default function ViewEmployee() {
    const [employees, setEmployees] = useState([]);
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/viewemployee")
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [selectedImage]);

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:4000/deleteemployee/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setEmployees(employees.filter((employee) => employee._id !== id));
                alert("Delete");
            }
            else {
                throw new Error("Request failed.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleToggleActive = async (id, active) => {
        try {
            const response = await fetch(`http://localhost:4000/employeestatus?id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ active: !active }),
            });
            const data = await response.json();
            if (response.ok) {
                setEmployees(
                    employees.map((employee) =>
                        employee._id === id ? { ...employee, active: !active } : employee
                    )
                );
            }
            else {
                throw new Error("Request failed.");
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            setSelectedImage(URL.createObjectURL(imageFile));
            document.getElementById("image-error").style.display = "none";
        }
    };

    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [cnic, setcnic] = useState("");
    const [salary, setsalary] = useState("");
    const [role, setrole] = useState("");
    const [error, setError] = useState("");
    const [color, setColor] = useState("success");
    const [show, setShow] = useState(false);
    const handleClose = (event) => {
        document.getElementById("error").style.display = "none";
    };
    const handleCloseModal = () => setShow(false);
    function handleShow(
        Id,
        Name,
        Image,
        Email,
        Contact,
        Cnic,
        Salary,
        Role
    ) {
        setid(Id);
        setname(Name);
        setSelectedImage(`http://localhost:4000/images/${Image}`);
        setemail(Email);
        setcontact(Contact);
        setcnic(Cnic);
        setsalary(Salary);
        setrole(Role);
        setShow(true);
        // document.getElementById("employeeimg").value = Image;
    }

    const handleEmployee = async (event) => {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var image = document.getElementById("employeeimg").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var cnic = document.getElementById("cnic").value;
        var salary = document.getElementById("salary").value;
        var role = document.getElementById("role").value;
        console.log(name, image, email, contact, cnic, salary, role);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var add = true;
        if (name == "") {
            add = false;
            document.getElementById("name-error").style.display = "block";
            document.getElementById("name-error").innerHTML =
                "Employee Name is required field";
            document.getElementById("name-error").style.color = "red";
        } else {
            document.getElementById("name-error").style.display = "none";
        }
        if (image == "") {
            add = false;
            document.getElementById("image-error").style.display = "block";
            document.getElementById("image-error").innerHTML =
                "Employee Image is required field";
            document.getElementById("image-error").style.color = "red";
        } else {
            document.getElementById("image-error").style.display = "none";
        }
        if (email == "") {
            add = false;
            document.getElementById("email-error").style.display = "block";
            document.getElementById("email-error").innerHTML =
                "Email is required field";
            document.getElementById("email-error").style.color = "red";
        } else {
            document.getElementById("email-error").style.display = "none";
        }
        if (regex.test(email) == false) {
            add = false;
            document.getElementById("email-error").style.display = "block";
            document.getElementById("email-error").innerHTML = "Email is Invalid";
            document.getElementById("email-error").style.color = "red";
        } else {
            document.getElementById("email-error").style.display = "none";
        }
        if (contact == "") {
            add = false;
            document.getElementById("contact-error").style.display = "block";
            document.getElementById("contact-error").innerHTML =
                "Contact Number is required field";
            document.getElementById("contact-error").style.color = "red";
        } else {
            document.getElementById("contact-error").style.display = "none";
        }
        if (cnic == "") {
            add = false;
            document.getElementById("cnic-error").style.display = "block";
            document.getElementById("cnic-error").innerHTML =
                "Cnic is Requried field";
            document.getElementById("cnic-error").style.color = "red";
        } else {
            document.getElementById("cnic-error").style.display = "none";
        }
        if (salary == "") {
            add = false;
            document.getElementById("salary-error").style.display = "block";
            document.getElementById("salary-error").innerHTML =
                "Salary is Requried field";
            document.getElementById("salary-error").style.color = "red";
        } else {
            document.getElementById("salary-error").style.display = "none";
        }
        if (role == "") {
            add = false;
            document.getElementById("role-error").style.display = "block";
            document.getElementById("role-error").innerHTML =
                "Role is Requried field";
            document.getElementById("role-error").style.color = "red";
        } else {
            document.getElementById("role-error").style.display = "none";
        }
        if (add == true) {
            const formData = new FormData(event.target);

            console.log('FormData:', Object.fromEntries(formData));
            try {
                const response = await fetch(`http://localhost:4000/updateemployee?id=${id}`, {
                    method: "POST",
                    body: formData,
                });
                if (response.ok) {
                    document.getElementById("errorss").innerHTML = "REGISTERED SUCCESSFULLY";
                    document.getElementById("errorss").style.color = "green";
                    document.getElementById("errorss").style.display = "block";
                    // Employee added successfully
                    setTimeout(() => {
                        // resetForm();
                        setSelectedImage(
                            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                        );
                        document.getElementById("errorss").style.display = "none";
                        // document.getElementById("add").reset();
                        setname("");
                        setemail("");
                        setcontact("");
                        setcnic("");
                        setsalary("");
                        setrole("");
                        handleCloseModal();
                    }, 2000);
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleName = (event) => {
        if (event.target.value != "") {
            document.getElementById("name-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("name-error").style.display = "block";
            document.getElementById("name-error").style.color = "red";
            document.getElementById("name-error").innerHTML =
                "Employee Name is required field";
        }
        setname(event.target.value)
    };

    const handleEmail = (event) => {
        if (event.target.value != "") {
            document.getElementById("email-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("email-error").style.display = "block";
            document.getElementById("email-error").style.color = "red";
            document.getElementById("email-error").innerHTML =
                "Email is required field";
        }
        setemail(event.target.value)
    };

    const handleContact = (event) => {
        if (event.target.value != "") {
            document.getElementById("contact-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("contact-error").style.display = "block";
            document.getElementById("contact-error").style.color = "red";
            document.getElementById("contact-error").innerHTML =
                "Contact is required field";
        }
        setcontact(event.target.value)
    };

    const handleCnic = (event) => {
        if (event.target.value != "") {
            document.getElementById("cnic-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("cnic-error").style.display = "block";
            document.getElementById("cnic-error").style.color = "red";
            document.getElementById("cnic-error").innerHTML =
                "CNIC is required field";
        }
        setcnic(event.target.value)
    };

    const handlesalary = (event) => {
        if (event.target.value != "") {
            document.getElementById("salary-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("salary-error").style.display = "block";
            document.getElementById("salary-error").style.color = "red";
            document.getElementById("salary-error").innerHTML =
                "Salary is required field";
        }
        setsalary(event.target.value)
    };

    const handlerole = (event) => {
        if (event.target.value != "") {
            document.getElementById("role-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("role-error").style.display = "block";
            document.getElementById("role-error").style.color = "red";
            document.getElementById("role-error").innerHTML =
                "Role is required field";
        }
        setrole(event.target.value)
    };


    //   useEffect(() => {
    //     // document.body.style.backgroundColor="white";
    //     // const name=hexToText(Cookies.get("seshF"));
    //     // setName(name);
    //     // const fetchData = async () => {
    //     //   await fetch(
    //     //   `http://localhost:4000/dashboard`,
    //     //   {
    //     //     method: "GET",
    //     //     headers: {
    //     //       "api-key": process.env.REACT_APP_API_KEY,
    //     //     },
    //     //   }
    //     // )
    //     //   .then((response) => {
    //     //     if (!response.ok) {
    //     //       throw new Error("Request failed.");
    //     //     }
    //     //     return response.json();
    //     //   })
    //     //   .then((data) => {
    //     //     setDashbord(data.data);
    //     //   })
    //     //   .catch((error) => {
    //     //     console.error("Error:", error);
    //     //   });
    //     // };
    //     // fetchData();
    //   }, []);

    // function hexToText(hex) {
    //   try{
    //   let text = '';
    //   for (let i = 0; i < hex.length; i += 2) {
    //     text += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //   }
    //   return text;
    // }
    // catch{

    // }
    // }

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
                                                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow(employee._id,
                                                    employee.name,
                                                    employee.image,
                                                    employee.email,
                                                    employee.contact,
                                                    employee.cnic,
                                                    employee.salary,
                                                    employee.role)
                                                }>
                                                    Update
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => handleDelete(employee._id)}
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    variant={employee.active ? 'success' : 'warning'}
                                                    size="sm"
                                                    onClick={() => handleToggleActive(employee._id, employee.active)}
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
                            action={`http://localhost:4000/updateemployee?id=${id}`}
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
                                    onChange={handleImageChange}
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
                                        value={name}
                                        onChange={handleName}
                                    />
                                    <span id="name-error" style={{ marginTop: "-15px" }}></span>
                                </MDBCol>
                                <MDBCol md="6">
                                    <label>Email</label>
                                    <MDBInput
                                        id="email"
                                        name="email"
                                        hint="Email"
                                        value={email}
                                        onChange={handleEmail}
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
                                        value={contact}
                                        onChange={handleContact}
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
                                        value={cnic}
                                        onChange={handleCnic}
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
                                        value={salary}
                                        onChange={handlesalary}
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
                                        value={role}
                                        onChange={handlerole}
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
