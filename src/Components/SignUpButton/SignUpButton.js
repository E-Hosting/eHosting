import React from "react";
import "../SignUpButton/SignUpButton.css";
import HostingAll from "../Hosting/HostingAll";
import { Link } from "react-router-dom";

export default function SignUpButton(props) {
    const handelClickSignUp = () => {
    const obj1 = props.obj;
    const TitleCourse = localStorage.setItem(
        "TitleCourse",
    JSON.stringify({ obj1 })
    );
    console.log(obj1);

    // const checkLogInUser = localStorage.getItem("uerLogin");
    // console.log(checkLogInUser);
    // if (checkLogInUser !== null) {
    //     console.log("go");
    // } else {
    //     console.log("no");
    // }
    };

    return (
    <div className="SignUpDiv">
        <Link to ="/Calender" >
        <button className="SignUpButton" onClick={handelClickSignUp}>
        {" "}
        Sign Up Now
        </button>
        </Link>
    </div>
    );
}
