import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Button} from "react-bootstrap";
import { } from "react-router-dom";
import Navigation from './Navigation';
import Navigation2 from './Navigation2'
function Home() {
  return (
    <div className="home">
    <Navigation/>
    <Navigation2/>

   

    </div>
  );
}

export default Home;
