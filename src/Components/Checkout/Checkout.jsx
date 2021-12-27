import React, { useState } from "react";
import swal from 'sweetalert'
import "./Checkout.css"

const Checkout = () => {

      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [msgemail, setEmailmsg] = useState("");
      const [msgphoneNumber, setPhoneNumbermsg] = useState("");
      let count = 0;
      const submitHandler = e => {
            e.preventDefault();


            count = 0
            if (!email.includes('@')) {
                  setEmailmsg('The Email is Not Vaild')
                  count = count + 1
            } else {
                  setEmailmsg('')
            }
            if (phoneNumber.length < 10) {
                  setPhoneNumbermsg("Number of Phone must be equal 10 digit")
                  count = count + 1
            } else {
                  setPhoneNumbermsg("")
            }
            if (phoneNumber.length === 10 || email.includes('@')) {
                  swal({
                        title: 'Completed!',
                        text: 'Check your profile page',
                        buttons:"okk",

                  })
            } 
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
                                                      <input value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="you@example.com" id="email" />
                                                      <p>{msgemail}</p>
                                                </div>
                                                <div>
                                                      <label htmlFor="phoneNumber">Phone</label>
                                                      <input type="tel" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="+962XXXXXXXXX" required id="phoneNumber" />
                                                      <p>{msgphoneNumber}</p>
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