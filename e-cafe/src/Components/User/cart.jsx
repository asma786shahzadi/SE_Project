import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBTypography,
  MDBInput,

} from 'mdb-react-ui-kit';
import Navbar from './navbar';
import Footer from './footer';



export default function Cart() {
  const [openNavColor, setOpenNavColor] = useState(false);
  const [data, setData] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("role") !== 'User') {
      alert("You need to login first to view your cart");
    }
    else {
      async function getData() {
        try {
          const userId = localStorage.getItem("useremail");
          const response = await fetch(
            `http://localhost:4000/viewcart`
          );
          const responseData = await response.json();

          const filteredData = responseData.filter(item => item.userId === userId);
          setData(filteredData);
          setQuantities(filteredData.map(() => 1));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      async function getData1() {
        try {
          const userId = localStorage.getItem("useremail");
          const response = await fetch(
            `http://localhost:4000/viewuser`
          );
          const responseData = await response.json();

          const filteredData = responseData.filter(item => item.email === userId);
          setUserdata(filteredData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getData();
      getData1();
    }
  }, []);


  const handleRemoveFromCart = async (ProductId, UserId) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (isConfirmed) {
        const response = await fetch(
          `http://localhost:4000/deletecart?productId=${ProductId}&userId=${UserId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          const updatedData = data.filter(
            (item) => item.ProductId !== ProductId
          );
          const updatedQuantities = quantities.filter(
            (_, index) => index !== ProductId
          );
          setData(updatedData);
          setQuantities(updatedQuantities);
        } else {
          console.error("Error deleting Cart Item");
          alert("Error deleting Cart Item");
        }
      } else {
        console.log("Deletion canceled by the user");
      }
    } catch (error) {
      console.error("Error deleting Product:", error);
      alert("Error in deletion");
    }
  };

  const handleQuantityChange = (value, index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value, 10);
    setQuantities(newQuantities);
  };

  const handleBuy = async (productId, userId, productName, ProductImage, productDescription, productPrice, productSize, index) => {
    const requestData = {
      productId: productId,
      userId: userId,
      userAddress: userdata[0].address,
      productName: productName,
      productImage: ProductImage,
      productDescription: productDescription,
      productPrice: productPrice,
      productSize: productSize,
      productQuantity: quantities[index],
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/buyProduct",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      if (responseData.message === "outofstock") {
        alert("Product is out of stock / not enough quantity available");
      } else {
        window.location.href = responseData.sessionUrl;
      }
    } catch (error) {
      console.error("Error:", error.message);
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
        <h1 style={{ marginTop: "25px", color: '#AA9D8D' }}>My Cart</h1>
      </center>

      <MDBContainer fluid>
        <MDBRow className="justify-content-center mb-0">
          {data && data.length > 0 ? (
              data.map((item, index) => (
                <MDBCol md="12" xl="10" key={index}>
                  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <MDBCardImage
                              src={`http://localhost:4000/images/${item.ProductImage}`}
                              fluid
                              className="w-100"
                              style={{ maxHeight: "20rem", objectFit: "fit" }}
                            />
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md="12" lg="6">
                          <h3 style={{ color: "blue" }}>{item.productName}</h3>
                          <h4>{item.productSize}</h4>
                          <div className="d-flex flex-row align-items-center">
                          </div>
                          <center>
                            <p style={{ fontSize: "18px" }}>
                              {item.productDescription}
                            </p>
                          </center>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
                          <div className="d-flex flex-row align-items-center mb-1">
                            <center>
                              <h4 className="mb-1 me-1" style={{ paddingLeft: '50px' }}>
                                Total: Rs {item.productPrice * quantities[index]}
                              </h4>
                            </center>

                          </div>
                          <div className="d-flex flex-column mt-4">
                            <div className="d-flex flex-row align-items-center">


                              <div style={{ width: "300px" }}>
                                <MDBInput
                                  type="number"
                                  label="Quantity"
                                  min="1"
                                  value={quantities[index]}
                                  size="sm"
                                  onChange={(e) =>
                                    handleQuantityChange(e.target.value, index)
                                  }
                                />
                              </div>
                              <div >
                                <MDBTypography tag="h6" className="mb-0">
                                  Rs {item.ProductPrice}
                                </MDBTypography>
                              </div>
                            </div>
                            <button
                              type="button"
                              size="sm"
                              className="btn bg-primary btn-block mb-1 mt-20"
                              onClick={() =>
                                handleBuy(
                                  item.productId,
                                  item.userId,
                                  item.productName,
                                  item.ProductImage,
                                  item.productDescription,
                                  item.productPrice,
                                  item.productSize,
                                  index,
                                )
                              }
                              style={{ fontSize: "15px" }}
                            >
                              Buy Product
                            </button>
                            <button
                              type="button"
                              size="sm"
                              className="btn bg-warning btn-block mb-4 mt-20"
                              style={{ fontSize: "15px" }}
                              onClick={() => handleRemoveFromCart(item.productId, item.userId)}
                            >
                              Remove From Cart
                            </button>
                            <span id='erros'></span>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
          ) : (
            <div>Loading...</div>
          )}
        </MDBRow>
      </MDBContainer>


      <br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}