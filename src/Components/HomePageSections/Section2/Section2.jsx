import React from "react";
import "./Section2.css"
import { Link } from "react-router-dom";
function Section2(){
      return(
            <div className="containerSection2">
                  <div className="row">
                        <div className="col-md">
                              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" alt="image" />
                        </div>
                        <div className="col-md">
                              <h2>
                              Take the next step toward your personal and professional goals with Coursera.
                              </h2>
                              <Link to="/courses"><button className="btn customCoursesBtn">Browse</button></Link>
                        </div>
                  </div>
            </div>
      )
}

export default Section2;