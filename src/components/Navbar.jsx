import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import logo from "../assets/tour.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-100 justify-content-end"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isLoggedIn && (
              <>
                <Nav.Link href="/wishlist">Wishlist</Nav.Link>
              </>
            )}
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              {isLoggedIn && (
                <>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logOutUser}>
                    Log Out
                  </NavDropdown.Item>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Create</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
            {isLoggedIn && user.isAdmin && (
              <>
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                >
                  Dashboard
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
