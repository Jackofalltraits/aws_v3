import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Logo from "./Assets/nklogo.png";
import Facebook from "./Assets/facebook.png";
import Insta from "./Assets/insta.png";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

function Navigation() {
  return (
    <div id="nav">
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
        <div className="facebook">
        <a href="https://www.facebook.com/NatureKnitter" target="_blank" roundedCircle>
            <img alt="" style={{width:"30px"}}  src={Facebook} />
</a>        
</div>
        <a href="https://www.instagram.com/nature.knitterr/?hl=en" target="_blank">
            <img
              alt=""
              style={{width:"30px"}}
              src={Insta}
              ></img>
              </a>
          
        </Nav>
          <Link to={'/'}>
        <Nav>
        
        <img
                alt=""
                style={{ width: "30%"}}
                src={Logo}
              ></img>
              </Nav>
              </Link>
        <Form inline>
          <Link to={'contact'} className="contactnav">Contact Us</Link>
          <Link to={'about'} className="aboutnav">About</Link>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
