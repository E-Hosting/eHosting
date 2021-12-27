import React from "react";
import swal from 'sweetalert'
import "./Checkout.css"

const Checkout = () => {

      const submitHandler = e => {
            e.preventDefault();
            swal({
                  title: 'Completed!',
                  text: 'Check your profile page',
                  // button: 'OK',
            })
      }


      return (
            <>
                  <div className="container">
                        <div className="row">
                              <div className="col-md">
                                    <div className="CheckoutContainer">
                                          <form onSubmit={submitHandler} >
                                                <div className="flname">
                                                      <input type="text" placeholder="First name" required id="fname" />
                                                      <input type="text" placeholder="Last name" required id="lname" />
                                                </div>
                                                <div>
                                                      <label htmlFor="email">Email</label>
                                                      <input type="email" placeholder="you@example.com" required id="email" />
                                                </div>
                                                <div>
                                                      <label htmlFor="phoneNumber">Phone</label>
                                                      <input type="tel" placeholder="+962XXXXXXXXX" required id="phoneNumber" />
                                                </div>
                                                <div>
                                                      <label htmlFor="address">Address</label>
                                                      <input type="text" id="address" required />
                                                </div>
                                                {/* <div classname="paymentCustom">
                                                <span><input type="checkbox" required /></span> 
                                                <span><label>Confirm Payment</label></span>
                                                </div> */}
                                                <hr className="my-4" />

                                          
                                                <button type="submit" >Submit</button>
                                          </form>
                                    </div>
                              </div>
                              <div className="col-md">
                                    <div className="eduimg">
                                    <img src="https://res.cloudinary.com/durpirilj/image/upload/v1640541671/undraw_online_learning_re_qw08_wlhg9j.svg" width="500px" alt="EDU Image" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Checkout;