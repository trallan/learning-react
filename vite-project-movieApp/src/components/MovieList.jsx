import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

export default function MovieList({ searchQuery }){
    const [movies, setMovies] = useState([]);

    const url = "https://api.tvmaze.com";
    const path = "/search/shows?q=" + encodeURIComponent(searchQuery);

    async function fetchMovies(){
        try {

            const response = await fetch(url + path)
            const data = await response.json();

            if (!response.ok){
                throw new Error("Could not fetch url")
            }

            setMovies(data)
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    useEffect(() => {
        if (searchQuery) {
            fetchMovies();
        }
    }, [searchQuery]);
    
    return (
        <ul>
            {movies.map(movie => (
               <MovieCard movie={movie}/>
            ))}
        </ul>
    );
}