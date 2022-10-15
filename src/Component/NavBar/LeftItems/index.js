import React from "react";
import  "./style.css";
import Navbar from "react-bootstrap/Navbar";

const LeftNavBarItems = () => {
  return (
    <>
      <Navbar.Brand href="#">
        <img
          className="matterLogo"
          src="./images/logo.png"
          alt="Matter Logo"
        />
      </Navbar.Brand>

    </>
  );
};

export default LeftNavBarItems;
