import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faTag ,faEnvelope,faPenfield , faPhone,faPaperPlane, faLocation, faIndianRupee, faSearchLocation, faLocationCrosshairs, faMapLocation, faMapLocationDot, faLocationPinLock, faLocationPin, faHome,}  from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faMap } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div>
        <footer className="footerarea">
        <Container>
          <Row>
            <Col md={3}>
            <h5>Contact Info</h5>
                
                <p> <FontAwesomeIcon icon={faPhone} /><a href="+91-950 8089730"> +91-950 8089730 </a></p> 
                <br/>
                <p> <FontAwesomeIcon icon={faEnvelope} /><a href="nupurrani201819@gmail.com">    nupurrani201819@gmail.com</a></p>
                <p> <FontAwesomeIcon icon={faLocation} /> <a href=" Mumbai, India - 400104"> Mumbai, India - 400104</a>  </p>
                  

            </Col>
            <Col md={3} className="joinbtn">
              <h5>Location</h5>
              <ul className="no-bullets" >
                  <li><FontAwesomeIcon icon={faMapLocationDot} /><a href="#"> India  </a></li>
                  <li><FontAwesomeIcon icon={faLocationPinLock} /><a href="#"> USA  </a></li>
                  <li><FontAwesomeIcon icon={faLocationPinLock} /><a href="#"> Japan      </a></li>
                  <li><FontAwesomeIcon icon={faLocationPinLock} /><a href="#"> France    </a></li>
                
              </ul>
            
            </Col>
            <Col md={3} className="joinbtn">
              <h5>Quick Links</h5>
              <ul className="no-bullets" >
                  <li><FontAwesomeIcon icon={faHome} /><a href="#"> Home  </a></li>
                  <li><FontAwesomeIcon icon={faBuilding} /><a href="#"> About  </a></li>
                  <li><FontAwesomeIcon icon={faLocationPinLock} /><a href="#"> Products     </a></li>
                  <li><FontAwesomeIcon icon={faLocationPinLock} /><a href="#"> Review    </a></li>
                  <li><FontAwesomeIcon icon={faPhone} /><a href="#"> Contact   </a></li>
                
              </ul>
            
            </Col>
            <Col md={3} >
                <h5>Extra Links</h5>
                <ul className="no-bullets" >
                  <li><FontAwesomeIcon icon={faPaperPlane} /><a href="#"> My Account             </a></li>
                  <li><FontAwesomeIcon icon={faPaperPlane} /><a href="#"> My order             </a></li>
                  <li><FontAwesomeIcon icon={faPaperPlane} /><a href="#"> My Favorite</a></li>
                  
                </ul> 
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer