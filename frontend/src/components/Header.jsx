import React from "react";
import logo from "../assets/logo.png";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
const Header = () => {
  const {cartItems}=useSelector((state)=>state.cart)
  console.log(cartItems)
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>
              <img src={logo} alt="proshop"></img>
              proshop
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-Navbar-Nav" />
          <NavbarCollapse id="basic-Navbar-Nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart />
                  cart
                  {
                    cartItems.length > 0  && (
                    <Badge pill bg="danger" style={{marginLeft:'5px'}} >{cartItems.reduce((a,c)=>a+c.qty,0)}</Badge>
                    )
                  }
                </NavLink>
              </LinkContainer>

              <LinkContainer to="/login">
                <NavLink>
                  {" "}
                  <FaUser /> SignIn
                </NavLink>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
