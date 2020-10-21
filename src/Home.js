import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel, Row } from "react-bootstrap";
// import Scarf1 from "./Assets/scarf1.JPG";
// import Scarf2 from "./Assets/scarf2.JPG";
// import Scarf3 from "./Assets/scarf3.JPG";
// import Logo from "./Assets/nklogo.png";

// import {Button} from "react-bootstrap";
// import { } from "react-router-dom";
 import Navigation from './Navigation';
function Home() {
  return (
    <div className="home">
        <Navigation/>
    </div>
  );
}

export default Home;
