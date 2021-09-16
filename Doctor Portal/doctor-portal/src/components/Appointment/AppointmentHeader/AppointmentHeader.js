import React from "react";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import Image from "../../../images/HeaderMain.jpg";
const AppointmentHeader = ({handleDateChange}) => {
  
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <Calendar className="card-body card p-3" onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={Image} alt="" className="img-fluid rounded" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
