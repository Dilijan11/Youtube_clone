import "../video__list/videolist.css";
import blue from "../../assets/switch.svg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMovieContext } from "../../contexts/movie-contex";
export const VideoList = () => {
  const { data } = useMovieContext();
  const { videoId } = useParams();
  const [element, setElement] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2ad1ec74mshf0476501262e15ep192ccbjsn153e27b55080",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`, options)
      .then((response) => response.json())
      .then((response) => setElement(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(element);
  return (
    <div className="videolist">
      <div className="videolist__first">
        <iframe className="videolist__img" allowFullScreen src={`https://www.youtube.com/embed/${videoId}`} alt="" />
        <h3 className="videolist__head">Kinoni Nomi Chiqmadi</h3>
        <p className="videolist__text">123k views</p>
        <p></p>
      </div>
      <div className="videolist__second">
        <div className="videolist-second__div">
          <h2 className="videolist-second__head">Next</h2>
          <p className="videolist-second__text">Autoplay</p>
          <img className="videolist-second__button" src={blue} alt="" />
        </div>
        <div className="videolist__video">
          {data &&
            data.items.map((element) => {
              return (
                <Link to={`/movies/${element.id?.videoId}`} className="main__videos">
                  <img className="videos__img" src={element.snippet.thumbnails.default.url} alt="" />
                  <h3 className="videos__title">{element.snippet.title}</h3>
                  <p className="videos__text">{element.snippet.publishedAt}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
