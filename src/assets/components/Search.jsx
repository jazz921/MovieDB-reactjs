import React from 'react'
import searchIcon from '../images/search.svg'

function Search({ search, setSearch, searchMovies }) {

  function inputHandler(e) {
    setSearch(e.target.value)
  }

  function handleSearch() {
    if (search === '') {
      alert("input movie to search")
    } else {
      searchMovies(search)
    }
  }

  return (
    <div className="search-form">
      <input 
        type="text" 
        placeholder='Search movies...'
        value={search}
        onChange={inputHandler}
      />
      <img 
        src={searchIcon} 
        alt="" 
        onClick={handleSearch}
        />
    </div>
  )
}


export default Search