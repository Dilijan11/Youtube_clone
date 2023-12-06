import Header from "../components/header/header";
import Main from "../components/main/main";
import MoviesProvide from "../contexts/movie-contex";

const Home = () => {
  return (
    <>
      <MoviesProvide>
        <Header />
        <Main />
      </MoviesProvide>
    </>
  );
};

export default Home;
