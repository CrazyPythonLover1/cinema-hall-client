import React, { useContext, useState } from "react";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import "./Booking.scss";
import { IconButton } from "@material-ui/core";
// import SeatIcon from "../../Components/SeatIcon/SeatIcon";
// import { useSelector } from "react-redux";
// import { selectMovie } from "../../features/appSlice";
// import { selectUser } from "../../features/userSlice";
// import instance from "../axios";
import { useHistory } from "react-router-dom";
import SeatIcon from "../SeatIcon/SeatIcon";
import { UserContext } from "../../App";
function Booking() {
//   const movie = useSelector(selectMovie);
//   const user = useSelector(selectUser);
    const [movieInfo, setMovieInfo] = useContext(UserContext)
  const history = useHistory();
  const handleBooking = async () => {
    // await instance.post("/addBooking", {
    //   movieName: movieInfo.movieName,
    //   movieId: movieInfo.movieId,
    //   numberOfBookings: movieInfo.numberofBookings,
    //   date: movieInfo.date,
    //   userName: movieInfo.displayName,
    //   emailID: movieInfo.email,
    // });

    history.push("/myBookings");
  };

  return (
    <div className="booking">
      <div className="booking__seats">
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
      </div>
      <button className="btn-lg btn-success" onClick={handleBooking}>
        {" "}
        Confirm Booking
      </button>
    </div>
  );
}

export default Booking;
