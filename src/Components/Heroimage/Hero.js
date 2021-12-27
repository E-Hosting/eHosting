<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div>
        <div
          className="hero-img"
          style={{
            background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('../img/hero/zoom-for-education.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
          }}
        >
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
=======
import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
function Hero() {
    return (
        <div>
            <div>
                <div className='hero-img' style={{ background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('../img/hero/zoom-for-education.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition: 'center'  }}>
                    <div className='content'>
                    <h1><b>Our Services for Customer Success</b></h1>
                    <h2 >We put your success First !!</h2></div>
                    <Link to="/Services"><button className='btn-hero'>Book now</button></Link>
                    
                </div>

                <section className='mid-section'>
                {/* <h1>Top Features</h1> */}

                {/* <div className='features-card'>
                <div>
                <i class="far fa-play-circle"></i>
                <h3>Virtual Classrooms</h3>
                <p>keep students with full contact with his teacher</p>
                </div>

                <div>
                <i class="fas fa-book"></i>
                <h3>Quizzes and Online Exams</h3>
                <p>keep students with full contact with his teacher</p>
                </div>

                <div>
                <i class="fas fa-medal"></i>
                <h3>Personal Evaluation</h3>
                <p>keep students with full contact with his teacher</p>
                </div>
                </div> */}

                </section>
            </div>
           
        </div>
    )
}

export default Hero
>>>>>>> 51c5d0472566da1eca7ef357026701b32c798953
