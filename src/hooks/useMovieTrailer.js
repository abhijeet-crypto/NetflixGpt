import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailorVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addTrailorVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};
export default useMovieTrailer;
