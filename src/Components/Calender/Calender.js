import React, { useState } from "react";

function Calender() {
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
  const dateChangeHandlerFirst = (e, attr) => {
    setEnteredDateFirst(e.target.value);
    setForm({ ...form, [attr]: e.target.value });
  };
  const handelSelect = (e, attr) => {
    setForm({ ...form, [attr]: e.target.value });
  };
  const dateChangeHandlerLast = (e, attr) => {
    setEnteredDateEnd(e.target.value);
    setForm({ ...form, [attr]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, id: form.id + 1 });
    console.log(form.id);
    let ourArray = localStorage.getItem("timeOfCourse")
      ? JSON.parse(localStorage.getItem("timeOfCourse"))
      : [];
    ourArray.push(form);
    localStorage.setItem("timeOfCourse", JSON.stringify(ourArray));
    setEnteredDateFirst("");
    setEnteredDateEnd("");

    console.log(enteredDateFirst);
    console.log(enteredDateEnd);
    console.log(form);
  };

  return (
    <div className="new-expense__controls">
      <form onSubmit={handelSubmit}>
        <label> Starting Date</label>
        <input
          type="date"
          min={minDateValue}
          max="2026-12-31"
          value={enteredDateFirst}
          onChange={(e) => {
            dateChangeHandlerFirst(e, "startDate");
          }}
        />
        <label> Ending Date</label>
        <input
          type="date"
          min={enteredDateFirst}
          max="2026-12-31"
          value={enteredDateEnd}
          onChange={(e) => {
            dateChangeHandlerLast(e, "endDate");
          }}
        />
        <select
          onChange={(e) => {
            handelSelect(e, "time");
          }}
          required
          value={form.time}
        >
          <option disabled selected value="">
            Select a time
          </option>
          <option value="2-5">2-5</option>
          <option value="5-8">5-8</option>
          <option value="8-11">8-11</option>
        </select>
        <button>Submit </button>
      </form>
    </div>
  );
}

export default Calender;
