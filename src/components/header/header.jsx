import "./header.css";

import logo from "../../assets/logo.svg";
import camera from "../../assets/camera.svg";
import combiend from "../../assets/Combined.svg";
import bell from "../../assets/bell.svg";
import oval from "../../assets/Oval.svg";
import man from "../../assets/man.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <section className="header">
          <div className="header__card">
            <div className="header-nav-first__box">
              <div className="header-nav-first-box__bars">
                <i className="bars fa-solid fa-bars , hamburger "></i>
                <a href="/">
                  <img className="logo" src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="header-nav-last-box">
              <div className="header-nav-last-box__input">
                <input className="header-nav-last-box-input__text" type="text" placeholder="Search" />
                <i className="search fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="header-nav-last-box__icon">
                <button className="header-nav-last__icon icon">
                  <img src={camera} alt="camera" />
                </button>
                <button className="header-nav-last__icon icon">
                  <img src={combiend} alt="combiend" />
                </button>
                <button className="header-nav-last__icon icon">
                  <img src={bell} alt="bell" />
                </button>
                <button className="header-nav-last__icon">
                  <img src={man} alt="man" />
                </button>
                <img className="bell icon" src={oval} alt="aval-bell" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
