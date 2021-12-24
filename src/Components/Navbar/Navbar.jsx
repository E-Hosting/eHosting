import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
function Navbar() {
      return(
            <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">E Hosting</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#" >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#">Wordpress Hosting</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#">VPS Hosting</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="#">Shared Hosting</Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hosting
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Shared Hosting</Link></li>
                  <li><Link className="dropdown-item" to="#">VPS Hosting</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Cloud Hosting</Link></li>
            </ul>
            </li>

            <Link to="/login"><button className="loginButton">Login</button></Link>
            </ul>
      </div>
      </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
            </>
      )
}

export default Navbar;