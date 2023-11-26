import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBTable, MDBTableBody, MDBTableHead, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { MDBTextArea } from "mdb-react-ui-kit";
import { Button, Modal, Alert } from "react-bootstrap";

export default function AdminSupport() {
    const [messages, setmessages] = useState([]);
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [question, setquestion] = useState("");
    const [answer, setanswer] = useState("");

    useEffect(() => {
        // document.body.style.backgroundColor="white";
        const getMessages = async () => {
            try {
                const response = await fetch("http://localhost:4000/viewsupport");
                const data = await response.json();
                console.log(data);
                const filtereddata = data.filter((message) => message.isReplied === "false");
                console.log(filtereddata);
                setmessages(filtereddata);
            }
            catch (err) {
                console.error(err);
            }
        };
        getMessages();
    }, [answer]);
    const [error, setError] = useState("");
    const [color, setColor] = useState("success");
    const [show, setShow] = useState(false);

    function handleShow(
        Id,
        userName,
        userEmail,
        subject,
        message,
    ) {
        setid(Id);
        setname(userName);
        setemail(userEmail);
        setsubject(subject);
        setquestion(message);
        setShow(true);
    }

    const handleSupport = async (event) => {
        event.preventDefault();
        var answer = document.getElementById("answer").value;
        console.log(answer);
        var add = true;
        if (answer == "") {
            add = false;
            document.getElementById("answer-error").style.display = "block";
            document.getElementById("answer-error").innerHTML =
                "Role is Requried field";
            document.getElementById("answer-error").style.color = "red";
        } else {
            document.getElementById("answer-error").style.display = "none";
        }
        if (add == true) {
            const formData = { email, answer, subject, question };
            try {
                const response = await fetch(`http://localhost:4000/updatesupport?id=${id}&email=${email}&answer=${answer}&subject=${subject}&question=${question}`, {
                    method: "PUT",
                });
                if (response.ok) {
                    document.getElementById("errorss").innerHTML = "REPLY SENT SUCCESSFULLY";
                    document.getElementById("errorss").style.color = "green";
                    document.getElementById("errorss").style.display = "block";
                    // Employee added successfully
                    setTimeout(() => {
                        // resetForm();
                        document.getElementById("errorss").style.display = "none";
                        // document.getElementById("add").reset();
                        setanswer("");
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


    const handleCloseModal = () => setShow(false);
    const handleClose = (event) => {
        document.getElementById("error").style.display = "none";
    };

    const handleAnswer = (event) => {
        if (event.target.value != "") {
            document.getElementById("answer-error").style.display = "none";
        }
        if (event.target.value == "") {
            document.getElementById("answer-error").style.display = "block";
            document.getElementById("answer-error").style.color = "red";
            document.getElementById("answer-error").innerHTML =
                "Answer is required field";
        }
        setanswer(event.target.value)
    };

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
                        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}>Admin Support</h1>
                    </center>
                    <MDBRow style={{ margin: "30px", overflowX: "auto" }}>
                        <MDBTable striped hover responsive>
                            <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th style={{ width: '350px' }}>Subject</th>
                                    <th style={{ width: '450px' }}>Question</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {messages && messages.length > 0 ? (
                                    messages.map((message) => (
                                        <tr key={message._id}>
                                            <td>{message.userName}</td>
                                            <td>{message.userEmail}</td>
                                            <td style={{ maxWidth: '350px', whiteSpace: 'normal' }}>{message.subject}</td>
                                            <td style={{ maxWidth: '450px', whiteSpace: 'normal' }}>{message.message}</td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow(message._id,
                                                    message.userName,
                                                    message.userEmail,
                                                    message.subject,
                                                    message.message,)
                                                }>
                                                    Reply
                                                </Button>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">Loading...</td>
                                    </tr>
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBRow>

                    {/* Modal to Reply to Customer */}
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
                            onSubmit={handleSupport}
                            action={`http://localhost:4000/updatesupport?id=${id}`}
                            enctype="multipart/form-data"
                            method="post"
                        >
                            <MDBRow className="align-items-center">
                                <label className="align-items-start">Question :</label>
                                <label className="align-items-start">{question}</label>
                                <label className="align-items-start">Answer :</label>
                                <MDBTextArea
                                    id="answer"
                                    rows={4}
                                    name="answer"
                                    hint="Answer"
                                    value={answer}
                                    onChange={handleAnswer}
                                />
                                <span id="answer-error" style={{ marginTop: "-15px" }}></span>
                            </MDBRow>

                                        <br />
                            <span id="errorss" ></span>
                            <Button style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none' }} className="text-white" type="submit">
                                Send
                            </Button>
                        </form>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
