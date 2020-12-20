import React, { useEffect, useState } from 'react';
import './Home.scss';
import Movie from './Movie/Movie';

const Home = () => {
    const api_key = "8450b2a300cc13a9d03990a3943cff79";
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[] )
    return (
        <div id="home" style={{paddingTop:"60px"}} className="home">
            <h1 className="text-center"> Amazing Movie Experience! </h1>
            <h3 className="text-center"> Buy Ticket from the movies list </h3>
            <div className="row  home__movies">
                {
                    movies?.map(movie =>(
                        <Movie key={movie.id} id={movie.id} name={movie.title} image={movie.backdrop_path}  />
                    ))
                }
            </div>
            
        </div>
    );
};

export default Home;