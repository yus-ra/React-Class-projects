import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  let config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const fetchData = () => {
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=66b5125&s=action";

    axios
      .get(url, config)
      .then((result) => {
        if (result.data.Search && result.data.Search.length !== 0) {
          setPopular(result.data.Search);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchTopData = ()=>{
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=66b5125&s=comedy";
    axios
    .get(url,config)
    .then((result)=>{
      if (result.data.Search && result.data.Search.length !== 0){
        setTopRated(result.data.Search);
      }
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  console.log(popular)
  useEffect(() => {
    fetchData();
    fetchTopData();
  }, []);
  return (
    <div>
      <div className="top-bar">
        <div className="search-area">
          <input type="text" className="search-input" placeholder="Search" />
          <span className="white">X</span>
        </div>
      </div>
      <div className="search-wrapper">
        
        <a href="#">Movie Title <span>2024</span></a>
      </div>

      <div className="main-content">
        <h1 className="white">Popular</h1>
        <div className="movie-container">
          {popular &&
            popular.map((movie, index) => (
              <div className="card-wrapper" key={index}>
                <img src={movie.poster} alt="Image Poster" />
                <span className="rating">64</span>

                <h5>{movie.title}</h5>
                <span>Year: {movie.Year}</span>
              </div>
            ))}
        </div>

        <h1 className="white mt-5">Top Rated</h1>
        <div className="movie-container">
          {topRated &&
            topRated.map((movie, index) => (
              <div className="card-wrapper" key={index}>
                <img src={movie.Poster} alt="" />
                <span className="rating">64</span>
                <h5 className="white">{movie.Title}</h5>
                <span>Year: {movie.Year}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
