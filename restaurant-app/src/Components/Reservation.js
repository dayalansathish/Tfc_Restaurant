import React, { useState } from "react";
import toast from "react-hot-toast"
import "./CSS/reservation.css";

function Reservation() {
  const options = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    adults: "",
    kids: "",
    specialRequest: "",
    name: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if(reservationData.date === ""){
        return toast.error("date required")
    }
    if(reservationData.time === ""){
      return toast.error("Time Required")
    }
    if(reservationData.adults === ""){
      return toast.error("Adults count required")
    }
    if(reservationData.kids === ""){
      return toast.error("Kids count required")
    }
    // if(reservationData.specialRequest === ""){
    //   return toast.error("specialRequest required")
    // }
    if(reservationData.name === ""){
      return toast.error("User Name required")
    }
    if(reservationData.contactNumber === ""){
      return toast.error("Mobile Number required")
    }
    console.log(reservationData);
    toast.success("Successfully sent information to restaurant manager will be contact soon")
    setReservationData({
      date: "",
      time: "",
      adults: "",
      kids: "",
      specialRequest: "",
      name: "",
      contactNumber: "",
    });
  };

  return (
    
    <div className="container-fluid reservation-bg">
      <hr className="text-warning w-75 m-auto"/>
      <div className="text-center py-2">
        <h3 className="reservation-title text-warning">Reservation Form</h3>
        <h3 className="text-light">Make a reservation</h3>
      </div>
      <div className="row">
        <div className="col-6">
          {/* <img src="/Images/res.jpg" alt="" className="" /> */}
        </div>
        <div className="col-6 ">
          <div className="container w-75 py-3  register-top m-5 border-top border-bottom border-warning">
            <div className="text-center reservation-title ">
              <h3 className="text-light">I want to reservation a table</h3>
              <h3 className="text-warning">Reservation Information</h3>
            </div>
            <div className="reservation-form-div">
              <form className="reservation-form reservation-title my-3">
                <div class="row">
                  <div class="col-6">
                    <label
                      for="Register-date"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="Register-date"
                      placeholder=""
                      aria-label="Date"
                      name="date"
                      value={reservationData.date}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="col-6">
                    <label
                      for="Register-time"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      class="form-control"
                      id="Register-time"
                      placeholder=""
                      name="time"
                      aria-label="Time"
                      value={reservationData.time}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="col-6 my-3">
                    <label
                      for="Register-adult"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Adult(s)
                    </label>
                    <select
                      class="form-select"
                      id="Register-adult"
                      aria-label="Register-adult"
                      name="adults"
                      value={reservationData.adults}
                      onChange={(e) => handleChange(e)}
                    >
                      <option selected>Select adult</option>
                      {options.map((option) => {
                        return (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="col-6 my-3">
                    <label
                      for="Register-kids"
                      class="form-label text-warning fw-lighter h5"
                    >
                      kids(s)
                    </label>
                    <select
                      class="form-select"
                      id="Register-kids"
                      aria-label="Register-kids"
                      name="kids"
                      value={reservationData.kids}
                      onChange={(e) => handleChange(e)}
                    >
                      <option selected>Select kids</option>
                      {options.map((option) => {
                        return (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="col-12">
                    <label
                      for="Register-textarea"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Special Request (optional)
                    </label>
                    <textarea
                      class="form-control"
                      id="Register-textarea"
                      placeholder="Request message here"
                      aria-label="With textarea"
                      name="specialRequest"
                      value={reservationData.specialRequest}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                  <div class="col-6 my-3">
                    <label
                      for="Reservation-name"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Reservation-name"
                      placeholder="Name"
                      name="name"
                      value={reservationData.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="col-6 my-3">
                    <label
                      for="Reservation-number"
                      class="form-label text-warning fw-lighter h5"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text/number"
                      class="form-control"
                      id="Reservation-number"
                      placeholder="Enter Phone"
                      name="contactNumber"
                      value={reservationData.contactNumber}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => onSubmit()}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
