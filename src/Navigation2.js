import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import Logo from "./Assets/nklogo.png";
import Facebook from "./Assets/facebook.png";
import Insta from "./Assets/insta.png";
//import Patrion from "./Assets/patrion.png";

function Navigation2() {
  return (
    <div>
      <div id="nav">
        
          <Navbar className="color-nav" variant="light">
              <div className="mininav">
            <Nav>
              <Link to={"products"}>
                <div className="shopbutton">
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{ width: "100%", height: "100%" }}
                >
                  <b>Shop</b>
                </Button>
                </div>
              </Link>
              <div className="checkbutton">
              <Link to={"checkout"}>
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{ width: "100%", height: "100%" }}
                >
                  <b>Checkout</b>
                </Button>
              </Link>
                </div>
            </Nav>
              </div>
          </Navbar>
      </div>
    </div>
  );
}

export default Navigation2;
