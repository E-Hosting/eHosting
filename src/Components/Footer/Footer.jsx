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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Aboutus">About us</Link></li>
                  <li><Link to="/programs">Services</Link></li>
                  <li><Link to="/programs">Terms of service</Link></li>
                  <li><Link to="/Aboutus">Privacy policy</Link></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
                  <li><a href="https://www.w3schools.com/">Web Design</a></li>
                  <li><a href="https://www.w3schools.com/">Web Development</a></li>
                  <li><a href="https://www.w3schools.com/">Product Management</a></li>
                  <li><a href="https://www.w3schools.com/">Marketing</a></li>
                  <li><a href="https://www.w3schools.com/">Graphic Design</a></li>
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p> A108 Adam Street <br /> Jordan, NY 535022<br />Amman <br /><br /> <strong>Phone:</strong> 0777777777<br /> <strong>Email:</strong> eHosting@gmail.com<br /> </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
            <h3>About EDU</h3>
            <p>Education joins all your - learning needs -into one advanced platform giving your students, teachers and parents the right tools for a simpler and more connected learning experience.</p>
            <div className="social-links mt-3"> <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a> <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook"></i></a> <a href="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram"></i></a> <a href="https://www.linkedin.com/feed/" className="linkedin"><i className="fab fa-linkedin"></i></a> </div>
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