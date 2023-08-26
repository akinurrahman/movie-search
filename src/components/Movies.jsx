import React, { useContext } from "react";
import Context from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useContext(Context);

  return (
    <section className="d-flex justify-content-center">
      <div className="container">
        <div className="row">
          {movie.map((currMovie) => {
            const { imdbID, Poster } = currMovie;

            // Check if the Poster is available before rendering
            if (Poster !== "N/A") {
              return (
                <div
                  key={imdbID}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
                >
                  <NavLink to={`movie/${imdbID}`} className="d-block">
                    <img
                      src={Poster}
                      className="hover-zoom my-3"
                      alt="Movie Poster"
                      style={{ maxWidth: "100%" }}
                    />
                  </NavLink>
                </div>
              );
            } else {
              return null; // Skip rendering for movies without posters
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
