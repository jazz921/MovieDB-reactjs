import React from 'react'

function Movies({ movie }) {
  return (
    <div className="movies-container">
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt="" />
        <div className="movie-info">
          <p>Title: {movie.Title}</p>
          <p>Release Date: {movie.Year}</p>
          <p>Release Date: {movie.imdbID}</p>
        </div>
      </div>
    </div>
  )
}

export default Movies