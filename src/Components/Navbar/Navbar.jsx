import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
import Checkout from "../Checkout/Checkout";
function Navbar() {
      return(
            <>
      <nav className="navbar navbar-expand-lg navbar-light fixed">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">EDU</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Aboutus">About us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
            </li>

            <Link to="/login"><button className="loginButton">Login</button></Link>
            </ul>
      </div>
      </div>
      </nav>
            </>
      )
}

export default Navbar;