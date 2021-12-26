import React from 'react'
import './Meeting.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Calender from '../Calender/Calender'
function Meeting() {
    return (
        <div>
            <Navbar/>
            <h1 className='title-meeting'>Book your meeting</h1>
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
            <Calender/>
            {/* <hr className="my-4" />
            <button type="submit">Submit</button> */}
      </form>
      </div>
      </div>
      </div>
      </div>
            <Footer/>
        </div>
    )
}

export default Meeting
