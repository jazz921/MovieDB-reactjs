import React from "react";

const MovieCards = ({ movie }) => {
  // image url link
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <img src={imageUrl + movie.poster_path} alt="" />
      <button id="btn">View Details</button>
      <div className="text-info">
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCards;
