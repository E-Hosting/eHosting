import React from "react";
import swal from 'sweetalert'
import "./contactSection3.css";

function ContactSection3() {
  const handelSubmitswtalt =()=>{
    swal({
      title: 'Completed!',
      text: 'Thank you for your message, we will contact with you soon.',
      buttons:"ok",

})
  }
  return (
    <>
      <div className="contactContainer">
        <h3>Ask how we can help you</h3>
        <div className="row customContactContainer">
          <div className="col-md">
            <div className="contactHeading">
              <img
                src="https://res.cloudinary.com/durpirilj/image/upload/v1640544781/undraw_contact_us_re_4qqt_ykuf0r.svg"
                width="450px"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-md">
                <form onSubmit={handelSubmitswtalt}>
                      <input type="text" placeholder="Your name" className="btn" required/>
                      <br />
                      <input type="email" placeholder="you@example.com" className="btn" required/>
                      <br />
                      <textarea cols="23" rows="5" className="btn" placeholder="Tell us..." required></textarea>
                      <br />
                      <button className="btn customFormSend" >Send</button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection3;
