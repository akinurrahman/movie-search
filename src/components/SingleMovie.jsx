import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import Context from "../context/AppContext";
import { NavLink } from "react-router-dom";
const SingleMovie = () => {
  const { movie } = useContext(Context);
  const { id } = useParams();
  return (
    <>
      {movie.map(
        (currMovie) =>
          id === currMovie.imdbID && (
            <section className="movie-section" key={currMovie.imdbID}>
              <div className="movie-card">
                <figure>
                  <img src={currMovie.Poster} alt="" />
                </figure>
                <div className="card-content">
                  <p className="title">{currMovie.Title}</p>
                  <p className="card-text">{currMovie.Year}</p>
                  <p className="card-text">{currMovie.Type}</p>
                  <NavLink to="/" className="back-btn">
                    Go Back
                  </NavLink>
                </div>
              </div>
            </section>
          )
      )}
    </>
  );
};

export default SingleMovie;
