import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);

export const MoviesProvide = ({ children }) => {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "754f6215b1mshd081720e223c8f9p1a5525jsna0aa380b29ee",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50", options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const getMovieById = useCallback((videoId) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8e2ad1ec74mshf0476501262e15ep192ccbjsn153e27b55080",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  const value = useMemo(
    () => ({
      data,
      getMovieById,
    }),
    data,
    getMovieById
  );

  return <MoviesContext.Provider value={{ data }}>{children}</MoviesContext.Provider>;
};

export default MoviesProvide;
