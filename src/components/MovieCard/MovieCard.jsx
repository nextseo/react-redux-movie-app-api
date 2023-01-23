import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className="card">
        <div className="card-image">
            <img src={movie.Poster}/>
        </div>
        <div className="card-content">
            <span className="card-title">{movie.Title}</span>
            <p> Year : {movie.Year}</p>
        </div>
        <div className="card-action">
            <Link to={`movie/${movie.imdbID}`}>รายละเอียด</Link>
        </div>
    </div>
  )
}

export default MovieCard