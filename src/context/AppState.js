import { useEffect, useState } from "react";
import Context from "./AppContext";

const AppState = (props) => {
  const API_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "False", Message: "" });
  const [query, setQuery] = useState("Infinity War");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data.Search);
        setIsError({
          show: false,
        });
      } else {
        setIsError({
          show: true,
          Message: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_url}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query, API_url]);

  const contextValue = {
    isError,
    movie,

    query,
    setQuery,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default AppState;
