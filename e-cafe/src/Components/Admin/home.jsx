import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import Header from './navbar';
import Sidebar from './sidebar';

export default function AdminHome() {
  useEffect(() => {
    // document.body.style.backgroundColor="white";
  }, []);


  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "17%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "83%" }}>
        <Header />
        <div>
          <center>
            <h1 style={{ marginTop: "25px",color:'#AA9D8D' }}> Welcome to Dashboard</h1>
          </center>
          <MDBRow style={{ margin: "30px" }}>
            <MDBCol md="4">
              <MDBCard style={{ marginTop: "5px" }} className={`allcards`}>
                <MDBCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <MDBIcon
                        icon="home"
                        className="mr-2"
                        style={{ marginRight: "5px" }}
                      />
                      Total Rooms
                    </div>
                    <h2></h2>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4">
              <MDBCard style={{ marginTop: "5px" }}>
                <MDBCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <MDBIcon
                        icon="book"
                        className="mr-2"
                        style={{ marginRight: "5px" }}
                      />
                      Total Desks
                    </div>
                    <h2></h2>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
}
