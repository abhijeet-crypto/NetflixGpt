import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
