import React from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import LoginImg from "../../utils/images/dirgahyu-small.png";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake, FaInfoCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <div className="top-header col-12 d-flex">
      <div className="col-2 col-lg-2 col-md-2 d-flex justify-content-center">
        {/* eslint-disable-next-line */}
        <img src={LoginImg} className="header-img" />
      </div>
      <div className=" navigation-bar col-10 col-lg-10 col-md-10">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className=" col-12">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dirgahyu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <AiFillHome
                      style={{ marginTop: "-5px", marginRight: "5px" }}
                    />{" "}
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <FaHandshake
                      style={{ marginTop: "-3px", marginRight: "5px" }}
                    />
                    Join Us
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <FaInfoCircle
                      style={{ marginTop: "-3px", marginRight: "5px" }}
                    />{" "}
                    About Us
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <HiUsers
                      style={{ marginTop: "-3px", marginRight: "5px" }}
                    />{" "}
                    Volunteers
                  </Nav.Link>
                  <Nav.Link href="#action1">
                    <FiLogOut
                      style={{ marginTop: "-3px", marginRight: "5px" }}
                    />{" "}
                    LogOut
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}
      </div>
    </div>
  );
};

export default Header;
