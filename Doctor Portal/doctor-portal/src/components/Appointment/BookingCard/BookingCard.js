import React from "react";
// import AppointmentForm from "../AppointmentForm/AppointmentForm";
const BookingCard = ({ booking }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{booking.subject}</h5>
          <p>{booking.visitingHour}</p>
          <p>{booking.totalSpace} SPACES AVAILABLE</p>
          <br />
          <button className="btn btn-brand text-uppercase">
            BOOK APPOINTMENT
          </button>
          {/* //   <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm> */}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
