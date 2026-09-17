import './App.css'
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <h1>Hello Movie App!</h1>
      <p>Let's create a movie app !</p>

      <section>
        {/* Searching section */}
        <SearchBar 
          setSearchInput={setSearchInput} 
          searchInput={searchInput} 
          setSearchQuery={setSearchQuery}
        />
      </section>

      <section>
        {/* Movie List */}
        <MovieList searchQuery={searchQuery} />
      </section>
      
    </>
  )
}

export default App
