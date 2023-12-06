import "../header/header.css";
import "./main.css";
import fire from "../../assets/fire.svg";
import home from "../../assets/home.svg";
import subs from "../../assets/subs.svg";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import watch from "../../assets/watch.svg";
import favourite from "../../assets/favourites.svg";
import liked from "../../assets/liked.svg";
import music from "../../assets/music.svg";
import games from "../../assets/games.svg";
import arrow from "../../assets/array_down.svg";
import img from "../../assets/img-1.png";
import home2 from "../../assets/home2.svg";

import { useMovieContext } from "../../contexts/movie-contex";
import { Link } from "react-router-dom";

export const Main = (movie) => {
  const { data } = useMovieContext();
  return (
    <section className="main">
      <div className="container">
        <div className="main__card">
          <div className="sidebar">
            <div className="sidebar__icons">
              <ul className="sidebar__list">
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebars__img" src={home} alt="" />
                    <img className="sidebarss__img" src={home2} alt="" />
                    <p className="sidebar__text__active">Home</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={fire} alt="" />
                    <p className="sidebar__text">Trending</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={subs} alt="" />
                    <p className="sidebar__text">Subscriptions</p>
                  </a>
                </li>
              </ul>
              <ul className="sidebars__lists">
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={library} alt="" />
                    <p className="sidebar__text">Library</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={history} alt="" />
                    <p className="sidebar__text">History</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={watch} alt="" />
                    <p className="sidebar__text">Watch later</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={favourite} alt="" />
                    <p className="sidebar__text">Favourites</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={liked} alt="" />
                    <p className="sidebar__text">Liked videos</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={music} alt="" />
                    <p className="sidebar__text">Music</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={games} alt="" />
                    <p className="sidebar__text">Games</p>
                  </a>
                </li>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img" src={arrow} alt="" />
                    <p className="sidebar__text">Show more</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar__subscriptions">
              <ul>
                <h2 className="sidebar__head">Subscriptons</h2>
                <li>
                  <a className="sidebar__links" href="icon">
                    <img className="sidebar__img-second" src={img} alt="" />
                    <p className="sidebar__text-second">Gussie Singleton</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main__video">
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
    </section>
  );
};

export default Main;
