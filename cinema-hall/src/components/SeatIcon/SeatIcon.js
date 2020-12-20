import React, { useContext, useState } from "react";
import "./SeatIcon.scss";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import { IconButton } from "@material-ui/core";
import { UserContext } from "../../App";
// import { useDispatch, useSelector } from "react-redux";
// import { selectMovie, setMovieInfo } from "../../features/appSlice";

function SeatIcon() {
  const [booked, setBooked] = useState(false);

//   const dispatch = useDispatch();
//   const movie = useSelector(selectMovie);
const [movieInfo, setMovieInfo] = useContext(UserContext)
  const numBooked = movieInfo?.numberofBookings;
  return (
    <IconButton>
      {" "}
      <EventSeatOutlinedIcon
        style={{ fill: booked ? `red` : `currentcolor` }}
        onClick={() => {
          console.log("clicked");
          setBooked(true);

        //   dispatch(
        //     setMovieInfo({
        //       ...movieInfo,
        //       numberofBookings: numBooked + 1,
        //     })
        //   );
        }}
      ></EventSeatOutlinedIcon>
    </IconButton>
  );
}

export default SeatIcon;
