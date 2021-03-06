import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row } from "react-bootstrap";
import Scarf1 from "./Assets/scarfa.jpg";
import Scarf2 from "./Assets/scarfb.jpg";
import Scarf3 from "./Assets/scarfc.jpg";
import Logo from "./Assets/nklogo.png";

import {Button} from "react-bootstrap";
import { } from "react-router-dom";
import Navigation from './Navigation';
import Navigation2 from './Navigation2'
function Home() {
  return (
    <div className="home">
    <Navigation/>
    <Navigation2/>

<Row>
   
    </Row>
  
      <div className="caro">
        <Carousel>
          <Carousel.Item>
            <img
              className="scarfa"
              src={Scarf1}
              width={800}
              height={500}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="scarfb"
              src={Scarf2}
              width={800}
              height={500}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="scarfc"
              src={Scarf3}
              width={800}
              height={500}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
