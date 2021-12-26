import React from "react";
import {Link} from "react-router-dom"
import "./footer.css"

function Footer(){
      return(
            <>
      <footer id="footer">
      <div className="footer-top">
      <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Terms of service</Link></li>
                  <li><Link to="#">Privacy policy</Link></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
                  <li><Link to="#">Web Design</Link></li>
                  <li><Link to="#">Web Development</Link></li>
                  <li><Link to="#">Product Management</Link></li>
                  <li><Link to="#">Marketing</Link></li>
                  <li><Link to="#">Graphic Design</Link></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p> A108 Adam Street <br /> New York, NY 535022<br /> United States <br /><br /> <strong>Phone:</strong> +1 5589 55488 55<br /> <strong>Email:</strong> info@example.com<br /> </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
            <h3>About E Hosting</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3"> <Link to="/" className="twitter"><i className="fab fa-instagram"></i></Link> <Link to="/" className="facebook"><i className="fab fa-facebook"></i></Link> <Link to="/" className="instagram"><i className="fab fa-twitter"></i></Link> <Link to="/" className="linkedin"><i className="fab fa-linkedin"></i></Link> </div>
            </div>
            </div>
      </div>
      </div>
      <div className="container">
      <div className="copyright"> © Copyright <strong><span>EDU</span></strong>. All Rights Reserved </div>
      </div>
      </footer>

            </>
      )
}

export default Footer;