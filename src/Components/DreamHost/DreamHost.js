import React from "react";
import './DreamHost.css'

const Dreamhost = () => {
    return (
        <section className="dreamhostContainer">
            <h1>DreamHost Helps You Succeed</h1>
            <p>Grow your website faster by using DreamHost as your foundation.</p>
            <div className="dreamHostAll">

                <div className="dreamHost">

                    <img src="img/imgHost/img1.png" alt="...." />
                    <h3>Super Easy to Use</h3>
                    <p>Our custom control panel is simple to use and removes the headache of managing your web hosting.</p>

                </div>
                <div className="dreamHost">

                <img src="img/imgHost/img2.png" alt="...." />
                    <h3>Full Featured</h3>
                    <p>We do more than web hosting. Our tool suite includes everything you need to be successful.</p>

                </div>
                <div className="dreamHost">

                <img src="img/imgHost/img3.png" alt="...." />
                    <h3>Fast & Reliable</h3>
                    <p>If your website is slow or down, then you are losing customers, conversion and search engine rankings</p>

                </div>
                <div className="dreamHost">

                <img src="img/imgHost/img4.png" alt="...." />
                    <h3>24/7 Expert Support</h3>
                    <p>Our award-winning US-based experts are available to help when you get stuck — anytime, day or night.</p>

                </div>

            </div>
        </section>
    )
}
export default Dreamhost