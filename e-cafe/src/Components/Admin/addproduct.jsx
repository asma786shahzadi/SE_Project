import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';
import { Button, Alert } from "react-bootstrap";

export default function AddProduct() {
    // Use States
    const [error, setError] = useState("");
    const [color, setColor] = useState("success");
    const [selectedImage, setSelectedImage] = useState(
        "data:image/jpeg;base64,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"
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
                        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Add Product</h1>
                    </center>
                    <Alert variant={color} style={{ display: "none" }} id="error">
                        {error}{" "}
                        <a onClick={handleClose} style={{ color: "blue" }}>
                            close
                        </a>
                    </Alert>
                    <form
                        onSubmit={handleProduct}
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
                                name="productimg"
                                id="productimg"
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
                                    id="description"
                                    name="description"
                                    hint="Description"
                                />
                                <span id="description-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="align-items-center">
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="price"
                                    name="price"
                                    hint="Price"
                                />
                                <span id="price-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <select
                                    style={{ marginTop: "-25px" }}
                                    id="category"
                                    name="category"
                                    hint="Category"
                                    label="Category"
                                    className="form-select"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Cakes">Cakes</option>
                                    <option value="Drinks">Drinks</option>
                                </select>
                                <span id="category-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="align-items-center">
                            <MDBCol md="6">
                                <label></label>
                                <select
                                    style={{ marginTop: "-25px" }}
                                    id="size"
                                    name="size"
                                    hint="Size"
                                    label="Size"
                                    className="form-select"
                                >
                                    <option value="">Select Size</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                                <span id="size-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                            <MDBCol md="6">
                                <label></label>
                                <MDBInput
                                    id="quantity"
                                    name="quantity"
                                    hint="Quantity"
                                />
                                <span id="quantity-error" style={{ marginTop: "-15px" }}></span>
                            </MDBCol>
                        </MDBRow>
                        <br /><br />
                        <span id="errorss" ></span>
                        <Button style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none' }} className="text-white" type="submit">
                            Add Product
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
