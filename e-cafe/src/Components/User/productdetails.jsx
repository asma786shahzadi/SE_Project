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
