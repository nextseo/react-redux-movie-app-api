import React, { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { ApiKey } from "../../api/MovieApiKey";
import './Home.scss'

import { useDispatch } from "react-redux";
import { addMovie } from "../../store/Reducer";

// Components
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const searchKey = search ? search : "thor";
      const res = await movieApi.get(
        `?apikey=${ApiKey}&s=${searchKey}&type=movie`
      );
      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };
    fetchMovie();
  }, [search]);


  return (
    <div>
     <div className="grid-left-right">
     <h3 style={{ margin: "1rem 0" }}> DEVSRI API MOVIEAPP </h3>
      <input type="text" placeholder="search ..." value={search} onChange={(e)=>setSearch(e.target.value)} />
     </div>
      <MovieListing />
    </div>
  );
};

export default Home;
