import React from "react";
import Header from "../components/header/header";
import VideoList from "../components/video__list/videolist";
import MoviesProvide from "../contexts/movie-contex";

export const Movies = () => {
  return (
    <>
      <MoviesProvide>
        <Header />
        <VideoList />
      </MoviesProvide>
    </>
  );
};

export default Movies;
