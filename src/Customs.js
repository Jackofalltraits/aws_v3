import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {Button, Modal} from "react-bootstrap";
import { } from "react-router-dom";

function Customs(){

const [customShow, setCustomShow] = useState(false);
return(
    <div>
<Button variant="outline-success" size="sm" style={{ width: "120%", height: "2%" }}
 onClick={() => setCustomShow(true)} className="checkbutton" >Checkout</Button>{' '}


<Modal
        size="lg"
        show={customShow}
        onHide={() => setCustomShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedZmdASemQ_-xZlKebnW_aTgMwHdN8784eejI9Kxzr7VNF8A/viewform?embedded=true" width="640" height="1305" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></Modal.Body>
      </Modal>
      </div>
)}

export default Customs;