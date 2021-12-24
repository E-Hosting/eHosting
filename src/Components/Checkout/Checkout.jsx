import React from "react";

import "./Checkout.css"

function Checkout() {
      return(
      <>
      <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="CheckoutContainer">
      <form>
            <div className="flname">
            <input type="text" placeholder="First name" id="fname" />
            <input type="text" placeholder="Last name" id="lname" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="you@example.com" id="email" />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone</label>
            <input type="tel" placeholder="+962XXXXXXXXX" id="phoneNumber" />
            </div>
            <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"/>
            </div>
            <hr className="my-4" />
            <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </>
      )
}

export default Checkout;