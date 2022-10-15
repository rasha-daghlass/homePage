import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css"

const NavBarIcons = [
  "./images/search.svg",
  "./images/heart.svg",
  "./images/Shape.svg",
];

const RightNavBarItems = () => {
  return (
    <div className="d-flex">
      <Nav.Link className="NavBarItem">LOGIN</Nav.Link>
      {
        NavBarIcons.map((icon)=>{

            return <div className="NavBarIcons" ><img src={icon} alt="Icon" /></div>
        })
      }
    </div>
  );
};

export default RightNavBarItems;
