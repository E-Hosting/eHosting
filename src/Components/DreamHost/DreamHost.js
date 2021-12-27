import React from "react";
import './DreamHost.css'
import { Link } from "react-router-dom";
import Section1 from "../HomePageSections/Section1/Section1";
import Hero from "../Heroimage/Hero"
import 'animate.css';
const Dreamhost = () => {
    return (
        <section className="dreamhostContainer">
            <Hero />
            <div className="headingHome animate__animated animate__fadeInUp">
            <h1>Start learning from the world’s <br />best institutions </h1>
            <Link to="/courses" className="text-left">Explore all courses</Link>
            </div>
            <Section1 />

        </section>
    )
}
export default Dreamhost