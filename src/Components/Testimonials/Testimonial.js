import React from "react";
import ContactSection3 from "../HomePageSections/ContactSection3/contactSection3";
import Section2 from "../HomePageSections/Section2/Section2";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div class="testimonials text-center">

    <div class="container">
      <h3>Testimonials</h3>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
              <footer class="blockquote-footer"><cite title="Source Title">Azmi Tammam</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
              <footer class="blockquote-footer"><cite title="Source Title">Rania</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
              <footer class="blockquote-footer"><cite title="Source Title">Haneen</cite></footer>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Section2 />
    <ContactSection3 />
  </div>


  );
}

export default Testimonial;
