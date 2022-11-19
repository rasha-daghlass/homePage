import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LeftNavBarItems from "./LeftItems";
import MiddleNavBarItems from "./MiddleItems";
import RightNavBarItems from "./RightItems";
import  "./style.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
export const NavScrollExample=()=> {
  return (
    <div className="MainNavBar">
    <Navbar className="NavBar" bg="white" expand="lg">
      <Container >
        <LeftNavBarItems />
        <hr></hr>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <NavDropdown.Divider />

          <MiddleNavBarItems />
          <RightNavBarItems />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;
