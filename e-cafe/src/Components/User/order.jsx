import React, { useState, useEffect } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Navbar from './navbar';
import Footer from './footer';
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";


export default function Order() {
    const [openNavColor, setOpenNavColor] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("role") !== 'User') {
            alert("You need to login first to view your cart");
        }
        else {
            const fetchData = async () => {
                const response = await fetch('http://localhost:4000/getproduct');
                const data = await response.json();
                const filtereddata = data.filter(item => item.userId === localStorage.getItem("useremail"))
                setOrders(filtereddata);
            };
            fetchData();
        }

    }, []);


    const generatePDF = async () => {
        try {
            // Create a new jsPDF instance
            const pdfDoc = new jsPDF();

            // Add content to the PDF
            pdfDoc.text("Product Purchase Report", 20, 20);

            // Add a table with autotable
            pdfDoc.autoTable({
                head: [
                    ["Product Name", "Product Description", "Product Size", "Product Quantity", "Product Price", "Address"],
                ],
                body: orders.map((order) => [
                    order.productName,
                    order.productDescription,
                    order.productSize,
                    order.productQuantity,
                    order.productPrice,
                    order.userAddress,
                ]),
                theme: "grid", // Use 'grid' theme for better visual separation
                styles: {
                    fontSize: 10,
                    halign: "center",
                    cellPadding: 2,
                },
                headStyles: {
                    fillColor: [169, 154, 134], // Grullo color
                    textColor: [255, 255, 255], // White text color for better contrast
                },
                margin: { top: 30 },
            });
            // Save the PDF with file-saver
            pdfDoc.save("product_purchase_report.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    return (
        <>
            <Navbar />
            <MDBNavbar expand='lg' className='nav-color' >
                <MDBContainer style={{ marginTop: '10px', marginBottom: '10px' }} fluid>
                    <MDBNavbarBrand className='nav-text-color' href='#'></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavColor(!openNavColor)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse open={openNavColor} navbar>
                        <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/'>Home</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/products'>Products</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/seatreservation'>Seat Reservation</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/myorders'>My Orders</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/cart'>My Cart</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-text-color' href='/support'>Customer Support & FeedBack</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <center>
                <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}> My Orders</h1>
            </center>
            <br />
            {orders && orders.length > 0 ? (
                <div>
                    <Button
                        style={{ boxShadow: '0 4px 8px 0 #AA9D8D', backgroundColor: '#AA9D8D', border: 'none' }}
                        type="button"
                        className="mt-3"
                        onClick={generatePDF}
                    >
                        Download Report
                    </Button>

                </div>
            ) : (
                <div>Loading...</div >
            )
            }
            <br /><br /><br />
            <Footer />
        </>
    );
}