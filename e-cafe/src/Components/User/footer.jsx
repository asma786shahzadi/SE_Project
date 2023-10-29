import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#C9B8A5'}} className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{color:'#E6DFD8'}}>Connect with Us Through Social Media</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{color:'#E6DFD8'}} fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 style={{color:'#E6DFD8'}} className="text-uppercase fw-bold mb-4">
                <MDBIcon style={{color:'#E6DFD8'}} icon="shop" className="me-3" />
                E-Cafe
              </h6>
              <p style={{color:'#E6DFD8'}} >
              E-Cafe is the name of trust and taste top class foods are provided here, all kids are at the best qality
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 style={{color:'#E6DFD8'}} className="text-uppercase fw-bold mb-4">Categories</h6>
              <p style={{color:'#E6DFD8'}}>
                <a style={{color:'#E6DFD8'}} href="#!" className="text-reset">
                  Chinese
                </a>
              </p>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Italian
                </a>
              </p>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Fast Food
                </a>
              </p>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Desi
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 style={{color:'#E6DFD8'}} className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p style={{color:'#E6DFD8'}}>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 style={{color:'#E6DFD8'}} className="text-uppercase fw-bold mb-4">Contact</h6>
              <p style={{color:'#E6DFD8'}}>
                <MDBIcon  style={{color:'#E6DFD8'}} icon="home" className="me-2" />
                California, Cupertino 10012, US
              </p>
              <p style={{color:'#E6DFD8'}}>
                <MDBIcon style={{color:'#E6DFD8'}} icon="envelope" className="me-3" />
                info@ecafe.com
              </p>
              <p style={{color:'#E6DFD8'}}>
                <MDBIcon style={{color:'#E6DFD8'}} icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p style={{color:'#E6DFD8'}}>
                <MDBIcon style={{color:'#E6DFD8'}} icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 fs-4"
        style={{color:'#C8B7A4' , backgroundColor: "#AA9D8D" , paddingTop:'-10px' , paddingBottom:'-10px'}}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" style={{color:'#C9B8A5' }} href="/">
          {" "}
          E-Cafe
        </a>
      </div>
    </MDBFooter>
  );
}
