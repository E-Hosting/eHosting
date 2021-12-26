import React from 'react';
import Calender from '../Calender/Calender';
import './Profile.css';




const Profile = () => {

    // fetch user's data from local
    const loggedUser = JSON.parse(localStorage.getItem('uerLogin'));
    console.log(loggedUser);
    // const timeBooking = JSON.parse(localStorage.getItem('timeOfCourse'));
    // console.log(timeBooking[0].startDate);
    let bookingstable = null;
    if (localStorage.getItem('timeOfCourse') && localStorage.getItem('TitleCourse')) {
        let bookings = JSON.parse(localStorage.getItem('timeOfCourse'));
        // let bookCourse = JSON.parse(localStorage.getItem('TitleCourse'))
        bookingstable = (
            <div>
                {bookings.map((booking, id) => {
                    return (
                        <div className="row">
                            <table className="table">


                                <thead>
                                    <tr>
                                        <th scope="col">Course</th>
                                        <th scope="col">Start</th>
                                        <th scope="col">End </th>
                                        <th scope="col">Time</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/*fetch trip's data from (services Data)
                                              Bookings : array of objects*/}
                                    <tr>
                                        <td>{bookings[id].titlecorse}</td>
                                        <td>{bookings[id].startDate}</td>
                                        <td>{bookings[id].endDate}</td>
                                        <td>{bookings[id].time}</td>
                                    </tr>



                                </tbody>
                            </table>
                        </div>
                    )

                })}
            </div>
        )
    }



    return (

        <div>
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-middle  profile-head">
                                <div className="profile mr-3"><img src="https://us.123rf.com/450wm/jemastock/jemastock1708/jemastock170810943/84164152-stock-vector-man-avatar-icon-image-vector-illustration-design-black-and-white.jpg?ver=6" alt="..." width={130} className="rounded mb-2 img-thumbnail" />{/* <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a> */}</div>
                                <div className="media-body mb-5 text-white mt-5 "
                                    style={{ textAlign: 'center' }}>


                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">

                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-0">User Profile</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">{`Welcome ${loggedUser.userName}`}</p>
                                <p className="font-italic mb-0">{loggedUser.email}</p>

                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Your Bookings </h5>
                            </div>
                            {bookingstable}

                        </div>
                    </div>
                </div>
            </div>




        </div>

    )

}

export default Profile
