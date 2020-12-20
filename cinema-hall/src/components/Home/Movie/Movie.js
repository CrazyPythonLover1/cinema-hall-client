import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

import "./Movie.scss";
function Movie({ id, name, image }) {
    const [ movieInfo, setMovieInfo] = useContext(UserContext)
    console.log(movieInfo)
  const handleMovie = () => {
  
      setMovieInfo({
        movieId: id,
        movieName: name,
        moviePoster: image,
        numberofBookings: 0,
      })

  };
  const base_Url = "https://image.tmdb.org/t/p/original";
  return (
    <Link
      onClick={handleMovie}
      to="/movie-detail"
      className="col-sm-6 col-md-3  movie"
    >
      <img src={`${base_Url}${image}`} alt={name} /> <p>{name}</p>
    </Link>
  );
}

export default Movie;
