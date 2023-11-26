import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { Button, Alert } from "react-bootstrap";

export default function AddEmployee() {
    // Use States
    const [error, setError] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [cnic, setcnic] = useState("");
    const [salary, setsalary] = useState("");
    const [role, setrole] = useState("");
    const [color, setColor] = useState("success");
    const [employee, setemployee] = useState([]);
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );
    // Use Effect
    useEffect(() => {
        // Chnage the background color of whole body
        document.body.style.backgroundColor = "#f8f9fb";
        document.body.style.overflowX = "hidden";
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:4000/viewemployee")
                const data = await response.json();
                setemployee(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    // Image handler
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if(imageFile){
            setSelectedImage(URL.createObjectURL(imageFile));
            document.getElementById("image-error").style.display = "none";
        }
    };
    // Alert Handler
    const handleClose = (event) => {
        document.getElementById("error").style.display = "none";
    };
    // Add Product button handler
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
            var already = false;
            for (let i = 0; i < employee.length; i++) {
                if (employee[i].email == email) {
                    already = true;
                    console.log("hello");
                    setError("Email already Exist");
                    setColor("danger");
                    document.getElementById("error").style.display = "block";
                }
            }
            if (already == false) {
                const formData = new FormData(event.target);
                console.log(formData)
                try {
                    const response = await fetch('http://localhost:4000/addemployee', {
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
                        }, 2000);
                    } else {
                        console.error('Error:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
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
                        onSubmit={handleEmployee}
                    // style={{ margin: "30px", textAlign: "left" }}
                     id="add"
                    action={`http://localhost:4000/addemployee`}
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
                                <label></label>
                                <MDBInput
                                    id="name"
                                    name="name"
                                    value={name}
                                    hint="Name"
                                    onChange={handleName}
                                />
                                <span id="name-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="email"
                                    name="email"
                                    value={email}
                                    hint="Email"
                                    onChange={handleEmail}
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
                                    value={contact}
                                    hint="Contact"
                                    onChange={handleContact}
                                />
                                <span id="contact-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="cnic"
                                    name="cnic"
                                    value={cnic}
                                    hint="CNIC"
                                    onChange={handleCnic}
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
                                    value={salary}
                                    hint="Salary"
                                    onChange={handlesalary}
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
                            Add Employee
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
