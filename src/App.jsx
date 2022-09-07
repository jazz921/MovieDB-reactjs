// hooks
import { useState, useEffect } from "react";

// styles
import "./Styles.css";

//components
import Header from "./assets/components/Header";
import Search from "./assets/components/Search";
import Movies from "./assets/components/Movies";

// api url
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=52845a7e";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(movies[1]);
  }, []);

  // map through the elements of 'movies' array
  const movieItems = movies.map((movie) => (
    <Movies key={movie.imdbID} movie={movie} />
  ));

  return (
    <div>
      <Header />
      <Search 
        search={search}
        setSearch={setSearch}
        searchMovies={searchMovies}
      />

      <div className="movieContainer">
        {movies.length > 0 ? movieItems : <h1>No Movies Found</h1>}
      </div>

    </div>
  );
}

export default App;
