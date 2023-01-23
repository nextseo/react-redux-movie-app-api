import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    const {movies} = useSelector((state)=> state.movies)
  return (
    <div className="movie-container">
        {
            movies && movies.map((item)=>(
                <MovieCard key={item.imdbID} movie={item} />
            ))
        }
    </div>
  )
}

export default MovieListing