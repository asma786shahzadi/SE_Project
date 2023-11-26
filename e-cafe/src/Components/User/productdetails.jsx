import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import Navbar from './navbar';
import Footer from './footer';

export default function ProductDetails() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:4000/viewproduct")
                const data = await response.json();
                const filteredData = data.filter(item => item._id === id);
                console.log("data:", filteredData);
                setProducts(filteredData);
            }
            catch (err) {
                console.log(err)
            }
        };
        async function fetchData1() {
            try {
                const response = await fetch("http://localhost:4000/viewcart")
                const data = await response.json();
                setCart(data);
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchData1();
        fetchData();
    }, [])

    const handleCart = async () => {
        if (localStorage.getItem("useremail") === null) {
            document.getElementById("error").innerHTML = "You need to login first";
            document.getElementById("error").style.color = "aqua";
            document.getElementById("error").style.display = "block";
        }
        else {
            document.getElementById("error").style.display = "none";
            var add = true;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].productId === id) {
                    add = false;
                    document.getElementById("error").innerHTML = "Product already added to cart";
                    document.getElementById("error").style.color = "red";
                    document.getElementById("error").style.display = "block";
                }
                else {
                    add = true;
                    document.getElementById("error").style.display = "none";
                }
            }
            if (add === true) {
                const Data = {
                    ProductId: id,
                    UserEmail: localStorage.getItem("useremail"),
                    ProductName: products[0].name,
                    ProductPrice: products[0].price,
                    ProductImage: products[0].image,
                    ProductDescription: products[0].description,
                    ProductSize: products[0].size,
                }
                console.log(Data)
                const respone = await fetch('http://localhost:4000/addcart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Data)
                })
                const data = await respone.json();
                console.log(data);
                if (respone.ok) {
                    document.getElementById("error").innerHTML = "Product added to cart successfully";
                    document.getElementById("error").style.color = "green";
                    document.getElementById("error").style.display = "block";
                    setTimeout(() => {
                        window.location.href = "/cart";
                    }, 2000);
                }
            }
        }
    }


    return (
        <div>
            <Navbar />
            <center>
                <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> Product Detail</h1>
            </center>
            <div className='d-flex justify-content-center'>
                {products.map((item) => (
                    <MDBCard className='mb-3 mx-auto' style={{ width: '1000px' }}>
                        <MDBCardImage
                            class='hover-zoom'
                            position='top'
                            height={600}
                            src={`http://localhost:4000/images/${item.image}`}
                            alt='Product Image'
                        />

                        <MDBCardBody>
                            <MDBCardTitle style={{ fontWeight: 'bold', fontSize: '40px' }}>{item.name}</MDBCardTitle>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCardText style={{ fontWeight: 'bold' }}>Product Description :     <span style={{ fontWeight: 'normal' }}>{item.description}</span></MDBCardText>
                                    <MDBCardText style={{ fontWeight: 'bold' }}>Product Size :    <span style={{ fontWeight: 'normal' }}>{item.size}</span></MDBCardText>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardText style={{ fontWeight: 'bold' }}>Product Price :     <span style={{ fontWeight: 'normal', color: 'red' }}>{item.price} Rs</span></MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <span id='error'></span>
                            <MDBBtn onClick={handleCart} style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none', marginLeft: "5px" }}>Add To Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>

            <br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}
