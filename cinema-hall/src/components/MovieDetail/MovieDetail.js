import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./MovieDetail.scss";

function MovieDetail() {
    const [movieInfo, setMovieInfo] = useContext(UserContext)
  const [startDate, setStartDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const base_Url = "https://image.tmdb.org/t/p/original";
  const setMovieTime = () => {
   
      setMovieInfo({
        ...movieInfo,
        Date: startDate,
      })
   
    console.log(movieInfo);
  };
  console.log(startDate);
  console.log(movieInfo);
  return (
    <div className="movieDetail text-center">
      <div className="movieDetail__img">
        <img src={`${base_Url}${movieInfo?.moviePoster}`} alt="" />
      </div>

      <div className="movieDetails">
        <h1 style={{color:"purple"}} >{movieInfo?.movieName}</h1>
        <button
          onClick={() => setCalendar(true)}
          className="btn-primary btn-brand btn-lg"
        >
          Select date and time
        </button>
        {calendar && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        )}
        {calendar && (
          <Link to="/booking">
            <button onClick={setMovieTime} className="btn-success btn-lg">
              Check seat availability
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
