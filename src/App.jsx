import React, { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import InputContainer from "./assets/components/InputContainer";
import MovieCards from "./assets/components/MovieCards";
import "./styles.css";

// TODO: ADD RATING FILTER (MOST POPULAR TO LESS POPULAR)

function App() {
  // states
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  // effects
  useEffect(() => {
    fetchMovie();
  }, [searchTerm]);

  // event handlers
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault()
    setSearchTerm(text);
  };

  // api
  const api = {
    key: "412e40eec1c64ad8fa0633c24141271a",
    base: "https://api.themoviedb.org/3/search/movie?api_key=",
  };

  // fetch movie
  const fetchMovie = () => {
    // let title = searchTerm === "" ? "superman" : searchTerm;
    if (!searchTerm) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=412e40eec1c64ad8fa0633c24141271a&language=en-US&query=sony&page=1&include_adult=false`)
        .then((res) => res.json())
        .then((response) => setResult(response.results))
        .catch((err) => console.log(err));
    } else {
      fetch(`${api.base}${api.key}&query=${searchTerm}`)
      .then((res) => res.json())
      .then((response) => setResult(response.results))
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <InputContainer
          inputHandler={inputHandler}
          text={text}
          searchHandler={searchHandler}
        />
        <div className="movie-card-container">
          {result.map((movie) => {
            return <MovieCards key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
