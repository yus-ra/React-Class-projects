import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = "https://www.omdbapi.com/?i=tt3896198&apikey=66b5125&i=${id}";
      try {
        const response = await axios.get(url);
        setMovie(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading... Movie  Not Found</div>;
  }

  return (
    <div>
        <div class="moviedetails-container">
            <div class="movie-details">
                <h1 class="movie-title">{movie.Title}</h1>
                <p class="release-date">Release Date: <span>{movie.Year}</span></p>
                <div class="movie-overview">
                    <h2>Overview & Description</h2>
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </div>

            <div class="movie-poster">
                <img src={movie.Poster} alt= {movie.Title}/>
            </div>
        </div>

        <div class="cast-section">
        <h2>Cast</h2>
        <div class="cast-list">
            
            <div class="cast-member">
                <h3>{movie.Actors}</h3>
            </div>
        </div>
        </div>


    </div>

  );
}

export default MovieDetails;