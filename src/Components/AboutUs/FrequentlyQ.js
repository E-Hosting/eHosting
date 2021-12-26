import React from "react";
import "../AboutUs/FrequentQ.css";

function FrequentlyQ() {
  return (
    <div className="question-container">
      <h2 className="questionTitle"> Frequently Asked Questions</h2>
      <div className="onequestion">
        <div className="sub-title collapse">
          <p>
            <i class="fas fa-plus"></i> Why should I choose Education?
          </p>
        </div>
        <div className="collapse-content collapsed">
          <p>
            Managing the learning process design and development is an integral
            part of your success, especially if you have a large audience and a
            great deal of subject matter to deliver. However, success also
            requires using the right tool for the right job. We believe that
            Education can give you everything you need to do what you do best:
            create differentiated educational value!
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="sub-title collapse">
          <p>
            {" "}
            <i class="fas fa-plus"></i> What do I need to run Education?
          </p>
        </div>
        <div className="collapse-content collapsed">
          <p>
            All you will need to use Education is a device capable of browsing
            the internet. Computer workstations, laptops, tablets and mobile
            phones all work!
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="sub-title collapse">
          <p>
            <i class="fas fa-plus"></i> Does Education contain a business
            intelligence module? available?
          </p>
        </div>
        <div className="collapse-content collapsed">
          <p>
            Education’s Standard package offers an array of standard reports
            while the Premium package includes the entire Business Intelligence
            module.
          </p>
        </div>
      </div>
      <div className="onequestion">
        <div className="sub-title collapse">
          <p>
            <i class="fas fa-plus"></i> Which mobile OS platforms does Education
            support?
          </p>
        </div>
        <div className="collapse-content collapsed">
          <p>Education support iOS and Android mobile operating systems.</p>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyQ;
