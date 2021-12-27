import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Logo from '../../utils/assets/logo.svg';
import { Home } from '../../screens/Home/Home';
import { Company } from '../../screens/Company/Company';
import { ShirtShop } from '../../screens/ShirtShop/ShirtShop';
import { Tailoring } from '../../screens/Tailoring/Tailoring';
import { Depositions } from '../../screens/Depositions/Depositions';
import { Contact } from '../../screens/Contact/Contact';

import './styles.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const hideNav = () => {
    return setExpanded(expanded ? false : "expanded");
  };

  return (
    <Router>
      {/* navbar */}
      <div className="container">
        <Navbar bg="none" expand="lg" expanded={expanded} variant={"light"} className="container">
          <Container className="nav-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={hideNav} className="buttonNav" />

            <Navbar.Collapse id="basic-navbar-nav" className="colapsive-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"} onClick={hideNav}>
                  {/* <h1>INÍCIO</h1> */}
                  <img src={Logo} alt="Logo" style={{width: '80px'}} />
                </Nav.Link>
                <Nav.Link as={Link} to={"/company"} onClick={hideNav}>
                  <h1>EMPRESA</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/shirt-shop"} onClick={hideNav}>
                  <h1>CAMISARIA</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/tailoring"} onClick={hideNav}>
                  <h1>ALFAIATARIA</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/depositions"} onClick={hideNav}>
                  <h1>DEPOIMENTOS</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} onClick={hideNav}>
                  <h1>CONTATO</h1>
                </Nav.Link>
              </Nav>

              {
                windowDimensions.width < 991 &&
                <Nav>
                  <div className="contact-us">
                    <Nav.Link as={Link} to={"/help"} onClick={hideNav}>
                      <h1>TELEFONES</h1>
                    </Nav.Link>
                    <p>+55(11) 3088-0757</p>
                  </div>

                  <div className="contact-us">
                    <Nav.Link as={Link} to={"/start"} onClick={hideNav}>
                      <h1>E-MAIL</h1>
                    </Nav.Link>
                    <a href="mailto:renee@reneetrajar.com.br">renee@reneetrajar.com.br</a>
                  </div>
                </Nav>
              }
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>

      {/* navigation */}
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/shirt-shop" element={<ShirtShop/>}/>
          <Route path="/tailoring" element={<Tailoring/>}/>
          <Route path="/depositions" element={<Depositions/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};