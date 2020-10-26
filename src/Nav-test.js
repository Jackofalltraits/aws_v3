<BrowserRouter>
            <Row>
          <Navbar className="color-nav" variant="light">  
          <div className="face">           
              <a href="https://www.facebook.com/NatureKnitter" target="_blank" roundedCircle>
                <img
                  alt=""
                  style={{ width: "30%", height: "70%" }}
                  src={Facebook}
                ></img></a>
              </div>
              <div className="insta">
                <a href="https://www.instagram.com/nature.knitterr/?hl=en" target="_blank">
                <img
                  alt=""
                  style={{ width: "10%", height: "80%" }}
                  src={Insta}
                ></img></a>
                </div>
              {/* <div className="patrion">
                <a href="https://www.patreon.com/?utm_source=mi_google&utm_campaign=prospecting_brand_Brand_LAL_Patreon_Nameplate_Exact&utm_term=patreon&utm_medium=cpc&utm_content=467371055949&gclid=CjwKCAjw2dD7BRASEiwAWCtCb0P-LLr6_JGnhIkkr6a4I-ev0rfiYmfm2HImt1DvOagotGxf4bhH2RoCXtwQAvD_BwE">
                <img
                  alt=""
                  style={{ width: "4.6rem", height: "2.8rem" }}
                  src={Patrion}
                ></img>
                </a>
              </div> */}
            
            <div className="toplogo">
            <a href="/">
              <img
                alt=""
                style={{ width: "70%", height: "30%" }}
                src={Logo}
              ></img>
            </a>
            </div>
           
            <div class="divider" />

            <Nav>
              <div className="contactbutt">
              <a href='contact'>
                  <Button variant="light" style={{ width: "150%", height: "100%" }}>Contact Us</Button>
                </a>
              </div>
            </Nav>

            <Nav>
              <div className="aboutbutt">
              <a href='about'>
                  <Button variant="light" style={{ width: "120%", height: "100%" }}>About</Button>
                </a>
              </div>
            </Nav>

            <Nav>
            {/* <div className="cartbutt">
              <a href='checkout'>
          <Button variant="light" style={{ width: "7.8%" , height: "2.8%"}}>
                Checkout 
                </Button>
                </a>
              </div>      */}
            </Nav>
          </Navbar>
            </Row>
        </BrowserRouter>