import React from "react";
import Dreamhost from "../Components/DreamHost/DreamHost";
import Testimonial from '../Components/Testimonials/Testimonial';
import Hero from '../Components/Heroimage/Hero';
const Home = () => {
    return (
        <div>
            <Hero/>
            <Dreamhost />
            <Testimonial />

        </div>
    )
}
export default Home;