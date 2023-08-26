import React, { useContext } from "react";
import Context from "../context/AppContext";

const Search = () => {
  const { query, setQuery, isError } = useContext(Context);
  return (
    <section className="search-section">
      <h2>Search your favourite movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="row d-flex justify-content-center">
          <input
            type="text"
            className="col-7 col-sm-7 col-md-5 col-lg-5"
            placeholder="Search movie here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.Message}</p>
      </div>
    </section>
  );
};

export default Search;
