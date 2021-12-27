import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import './Meeting.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Calender from '../Calender/Calender'
function Meeting() {

    const  navigate=useNavigate();
    const checkLogInUser = localStorage.getItem("uerLogin");
      const handelUseNavigate=()=>{
          if (checkLogInUser !== null) 
          navigate('/Checkout')
  
          else {
            navigate('/Login')
          }
          
      }
      return <Calender handelUseNavigate={handelUseNavigate}/>
  }
  
  function Calender(props) {
    //   let minDateValue;
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    let year = today.getFullYear();
    //   let hour = today.getHours() + 1;
    //   let minutes = today.getMinutes();
    //   + "T" + hour + ":" + minutes;
    let minDateValue = year + "-" + month + "-" + day;
  
    const [enteredDateFirst, setEnteredDateFirst] = useState({
      enteredDateFirst: minDateValue,
    });
    const [enteredDateEnd, setEnteredDateEnd] = useState("");
    const [form, setForm] = useState({
      startDate: "",
      endDate: "",
      time: "",
      id: 0,
    });
    const fullTimeSlots = [
      { text: "Please Select", value: "" },
      { text: "08-09", value: "08-09" },
      { text: "09-10", value: "09-10" },
      { text: "10-11", value: "10-11" },
      { text: "12-13", value: "12-13" },
      { text: "13-14", value: "13-14" },
    ];
    const [timeSlots, setTimeSlots] = useState(fullTimeSlots);
    const [minEndDate, setMinEndDate] = useState(minDateValue);
  
    const dateChangeHandlerFirst = (e, attr) => {
      setEnteredDateFirst(e.target.value);
      console.log(enteredDateFirst);
      setForm({ ...form, [attr]: e.target.value });
      setTimeSlots(fullTimeSlots);
      // let selectedDate = stringToDate(e.target.value);
      // selectedDate.setDate(selectedDate.getDate());
      // let newMinDate = dateToString(selectedDate);
      // console.log(selectedDate);
      // setMinEndDate(newMinDate);
    };
    const handelSelect = (e, attr) => {
      setForm({ ...form, [attr]: e.target.value });
    };
    const dateChangeHandlerLast = (e, attr) => {
      setTimeSlots(fullTimeSlots);
      setEnteredDateEnd(e.target.value);
      // get the value from the array of items to check the selected dates and time .
      let ourArray = localStorage.getItem("timeOfCourse")
        ? JSON.parse(localStorage.getItem("timeOfCourse"))
        : [];
      if (ourArray.length > 0) {
        let filteredArray = ourArray.filter((element) => {
          // get intersection cases.
          let isIntersected =
            (stringToDate(element.startDate) <= stringToDate(enteredDateFirst) &&
              stringToDate(element.endDate) > stringToDate(enteredDateFirst)) ||
            (stringToDate(element.startDate) < stringToDate(enteredDateEnd) &&
              stringToDate(element.endDate) > stringToDate(enteredDateEnd)) ||
            (stringToDate(element.startDate) >= stringToDate(enteredDateFirst) &&
              stringToDate(element.endDate) <= stringToDate(enteredDateEnd)) ||
            (stringToDate(element.startDate) <= stringToDate(enteredDateFirst) &&
              stringToDate(element.endDate) >= stringToDate(enteredDateEnd));
          return isIntersected;
        });
        console.log("intersected list");
        console.log(filteredArray);
        // remove intersected periods.
        let resultTimeSlots = timeSlots;
        filteredArray.forEach((element) => {
          let filteredTimes = timeSlots.filter((timeElement) => {
            console.log(timeElement.value + " ---  " + element.time);
            return timeElement.value === element.time;
          });
  
          console.log("filtered times");
          console.log(filteredTimes);
          // if there is intersected timeslot remove the intersected time
          if (filteredTimes.length > 0) {
            let index = resultTimeSlots.indexOf(filteredTimes[0]);
            resultTimeSlots.splice(index, 1);
          }
        });
        setTimeSlots(resultTimeSlots);
        console.log("result after complete");
        console.log(resultTimeSlots);
      }
      setForm({ ...form, [attr]: e.target.value });
    };
    
    const handelSubmit = (e) => {
      e.preventDefault();
  
      // get the saved array from local storage, if no data was saved, create empty array.
      let ourArray = localStorage.getItem("timeOfCourse")
        ? JSON.parse(localStorage.getItem("timeOfCourse"))
        : [];
  
      // get the latest ID from the local storage saved data, if exists
      let latestId = ourArray.length > 0 ? ourArray[ourArray.length - 1].id : 0;
  
      setForm({ ...form, id: ++latestId });
      console.log(latestId);
      form.id = latestId;
      ourArray.push(form);
      localStorage.setItem("timeOfCourse", JSON.stringify(ourArray));
      const checkLogInUser = localStorage.getItem("uerLogin");
      console.log(checkLogInUser);
      // console.log(props)
      if (checkLogInUser !== null) {
          console.log("go");
         props.handelUseNavigate();
      } else {
          console.log("no");
          props.handelUseNavigate();
  
      }
      setEnteredDateFirst("");
      setEnteredDateEnd("");
      setForm({ ...form, time: "" });
  
      console.log(enteredDateFirst);
      console.log(enteredDateEnd);
      console.log(form);
  
    };
    const stringToDate = (stringDate) => {
      let stringDateValues = ("" + stringDate).split("-");
      let dateValue = new Date(
        stringDateValues[0],
        Number(stringDateValues[1]) - 1,
        stringDateValues[2]
      );
      return dateValue;
    };
  
    const dateToString = (dateVal) => {
      let day = dateVal.getDate();
      let month = dateVal.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
      let year = dateVal.getFullYear();
      let stringDateVal = year + "-" + month + "-" + day;
      return stringDateVal;
    };
    return (
        <div>
           
            <h1 className='title-meeting'>Book your meeting</h1>
            <div className="render-calender-form">
        <form onSubmit={handelSubmit}  className="calender-form">
          <div className="label-container">
            <label> Starting Date</label>
          </div>
          <input
            type="date"
            min={minDateValue}
            max="2026-12-31"
            value={enteredDateFirst}
            onChange={(e) => {
              dateChangeHandlerFirst(e, "startDate");
            }}
            required
          />
          <div className="label-container">
            <label> Ending Date</label>
          </div>
          <input
            type="date"
            min={enteredDateFirst}
            max="2026-12-31"
            value={enteredDateEnd}
            onChange={(e) => {
              dateChangeHandlerLast(e, "endDate");
            }}
            required

          />
          <div className="label-container">
            <label> Select Time</label>
          </div>
          <select
            className="time-slots-input"
            onChange={(e) => {
              handelSelect(e, "time");
            }}
            required
            value={form.time}
          >

            <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
             <div class="dropdown-content">
             <a href="#">Link 1</a>
             <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
            </div>

            {timeSlots.map((item) => {
              return <option value={item.value}>{item.text}</option>;
            })}
            {/* <option disabled selected value="">
            Select a time
          </option>
          <option value="2-5">2-5</option>
          <option value="5-8">5-8</option>
          <option value="8-11">8-11</option> */}
          </select>
          <button className="submit-calender" >Submit </button>
        </form>{" "}
      </div>
            {/* <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="CheckoutContainer">
      <form>
            <div className="flname">
            <input type="text" placeholder="First name" id="firstname" />
            <input type="text" placeholder="Last name" id="lastname" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="you@example.com" id="email" />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone</label>
            <input type="tel" placeholder="+962XXXXXXXXX" id="phoneNumber" />
            </div>
            <hr className="my-4" />
            <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
      </div> */}
         
        </div>
    )
}

export default Meeting
