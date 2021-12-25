import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div>
            <div>
                <div className='hero-img'>
                    <h2 className='content'>We put your success First !!</h2>
                <button className='btn-hero'>Book now</button>
                </div>
                <section className='mid-section'>
                <h1>Top Features</h1>

                <div className='features-card'>

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
                
                </div>




                </section>
            </div>
           
        </div>
    )
}

export default Hero
