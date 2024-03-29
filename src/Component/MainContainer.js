import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovies = movies[0];
  console.log(mainMovies);
  const { title, overview, id } = mainMovies;
  return (
    <div>
      <VideoTitle title={title} overview={overview}></VideoTitle>
      <VideoBackground id={id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
