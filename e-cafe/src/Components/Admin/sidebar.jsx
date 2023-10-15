import React, { useState, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openclass, setOpenclass] = useState("");
  useEffect(() => {
    if (screenWidth <= 600) {
      setOpenclass("pro-sidebar toggled");
      document.getElementById("mainlogo").style.display = "none";
      document.getElementById("bars").style.display = "none";
    } else {
      setOpenclass("pro-sidebar");
      document.getElementById("mainlogo").style.display = "block";
      document.getElementById("bars").style.display = "block";
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
        zIndex: "1",
        top: "0",
        left: "0",
      }}
    >
      <CDBSidebar
        textColor="white"
        className={openclass}
        style={{ backgroundColor: "#AA9D8D" }}
      >
        <CDBSidebarHeader
          prefix={<i style={{color :"#F6D5B0"}} className="fa fa-bars fa-large" id="bars"></i>}
        >
          <img
            src='E-Cafe-logos_transparent.png'
            alt="Booking Tool"
            id="mainlogo"
            style={{ width: "160px", height: "150px", marginTop: "-10px" }}
          />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adminhome">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addemployee">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="home">Add Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewemployee">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="columns">View Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addproduct">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="book">Add Food Item</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewproduct">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="book">View Food Items</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminsupport">
              <CDBSidebarMenuItem style={{color :"#F6D5B0"}} icon="key">Admin Support</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
              color :"#F6D5B0"
            }}
          >
            Manager Portal
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
