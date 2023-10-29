import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  MDBNavbarToggler,
  Collapse,
  MDBIcon,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBInput,
} from "mdbreact";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header */}
      <Navbar
        expand="md"
        style={{marginBottom:'-15px' , marginTop: "-15px", backgroundColor: "#C9B8A5" }}
      >
        <NavbarBrand>
            <img
                src="E-Cafe-logos_transparent.png"
                alt="logo"
                style={{ width: "50px", height: "50px" }}
                ></img>
          <h4
            className="font-weight-bold text-uppercase mb-0 ml-2"
            style={{ color: "#E6DFD8", fontWeight: "bold" }}
          >
            E-Cafe
          </h4>
        </NavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          {/* <MDBIcon icon="bars" fas style={{ color: "black" }} /> */}
        </MDBNavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <NavbarNav left></NavbarNav>
          <NavbarNav className="mx-auto" style={{ marginTop: "30px" }}>
            <form className="form-inline my-2 my-lg-0">
              <div style={{backgroundColor:'#C9B8A5'}} className="input-group">
                <div style={{backgroundColor:'#C9B8A5'}} className="input-group-prepend">
                  <span style={{backgroundColor:'#C9B8A5'}} className="input-group-text border-0">
                    <i style={{backgroundColor:'#C9B8A5'}} className="fa fa-search"></i>
                  </span>
                </div>
                <MDBInput
                  hint="Search"
                  type="text"
                  containerClass="mt-0 border-0"
                />
              </div>
            </form>
          </NavbarNav>
          <NavbarNav className="ml-auto" right>
            <NavItem style={{backgroundColor:'#C9B8A5'}}>
              <Dropdown style={{backgroundColor:'#C9B8A5'}}>
                <DropdownToggle nav caret style={{ color: "#E6DFD8" }}>
                  Language
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor:'#C9B8A5'}} >
                  <DropdownItem style={{color:'#E6DFD8'}} >English</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem style={{backgroundColor:'#C9B8A5'}}>
              <Dropdown style={{backgroundColor:'#C9B8A5'}}>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "#E6DFD8", marginRight: "20px" }}
                >
                  My Account
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor:'#C9B8A5'}}> 
                  <DropdownItem style={{color:'#E6DFD8'}} href="/register">Register</DropdownItem>
                  <DropdownItem style={{color:'#E6DFD8'}} href="/login">Login</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
      {/* header navbar */}
    </div>
  );
}
