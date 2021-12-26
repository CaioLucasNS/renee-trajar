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

import { Home } from '../../screens/Home/Home';

import './styles.scss';

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;

//   return {
//     width,
//     height
//   };
// }

export function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const hideNav = () => {
    return setExpanded(expanded ? false : "expanded");
  };

  return (
    <Router>
      {/* navbar */}
      <div className="container">
        <Navbar bg="none" expand="lg" expanded={expanded} variant={"light"} className="container">
          <Container className="nav-container">
            {/* <Navbar.Brand as={Link} to={"/"} onClick={hideNav}>
              Início
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={hideNav} className="buttonNav" />

            <Navbar.Collapse id="basic-navbar-nav" className="colapsive-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"} onClick={hideNav}>
                  <h1>INÍCIO</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} onClick={hideNav}>
                  <h1>CAMISARIA</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/prices"} onClick={hideNav}>
                  <h1>ALFAIATARIA</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/developers"} onClick={hideNav}>
                  <h1>DEPOIMENTOS</h1>
                </Nav.Link>
                <Nav.Link as={Link} to={"/developers"} onClick={hideNav}>
                  <h1>CONTATO</h1>
                </Nav.Link>
              </Nav>

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
                  <p>renee@reneetrajar.com.br</p>
                </div>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>

      {/* navigation */}
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
};