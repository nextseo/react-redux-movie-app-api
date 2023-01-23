import React, { useEffect, useState } from "react";
import './MovieDetail.scss'
import movieApi from "../../api/MovieApi";
import { ApiKey } from "../../api/MovieApiKey";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const featchMovie = async () => {
      const res = await movieApi
        .get(`?apikey=${ApiKey}&i=${id}&plot=full`)
        .catch((err) => {
          console.log("Error is : ", err);
        });
      setMovie(res.data);
      setLoading(true);
    };
    featchMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="movie-detail-con">
          <div className="movie-detail-img">
            <img src={movie.Poster} alt={movie.Poster} />
          </div>
          <div className="movie-detail-info">
            <h3>{movie.Title}</h3>
            <p style={{ margin: "2rem 0" }}>{movie.Plot}</p>
            <div>
              <strong>Released : {movie.Released}</strong>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ margin: "1rem 0" }}>loading....</h4>
      )}
    </div>
  );
};

export default MovieDetail;
