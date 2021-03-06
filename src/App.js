import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact'
import Checkout from './Checkout'
import Products from "./Products";
import Beanies from "./Beanies";
import Blankets from "./Blankets";
import Scarves from "./Scarves";
import Coasters from "./Coasters";
import Jewelry from "./Jewelry";
import Kandi from "./Kandi";
import Magnets from "./Magnets";

import {  } from "react-bootstrap";


function App() {
  return (
    <div>      
     
     <BrowserRouter>
     <Route path='/' exact component={Home}/>
     <Route path='/products' exact component={Products}/>
     <Route path='/contact' exact component={Contact}/>
     <Route path='/about' exact component={About}/>

     <Route path='/scarves' exact component={Scarves}/>
     <Route path='/blankets' exact component={Blankets}/>
     <Route path='/beanies' exact component={Beanies}/>
     <Route path='/kandi' exact component={Kandi}/>
     <Route path='/jewelry' exact component={Jewelry}/>
     <Route path='/magnets' exact component={Magnets}/>
     <Route path='/coasters' exact component={Coasters}/>

     </BrowserRouter>
    
    </div>
  );
}

export default App;