import react from "react";
import "./Section1.css"
import { Link } from "react-router-dom";
function Section1() {
      return(
            <>
            <div className="section1Container">
                  <div className="title">
                  <h1>
                  Learn Without Limits!
                  </h1>
                  <p>
                  Build skills with courses, certificates, and degrees online <br /> from world-class universities and companies.
                  </p>
                  <Link to="/register"><button className="btn customJoinForFree">Join for free</button></Link>
                  </div>
                  <div className="bodySection1">
                  <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/5c3849b879a88db26672f93ea5ffbabe/2021-LOHP-hero-b.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" alt="" />
                  </div>
            </div>
            </>
      )
}

export default Section1