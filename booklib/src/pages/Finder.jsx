import { useState } from "react";
import useFetch from "./useFetch";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Finder.css";

const Finder = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("warcraft");
  const handleClick = () => {
    setSearch(value);
    if (!value) {
      setSearch("Warcraft");
    }
  };

  const apikey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apikey}`;

  let { books, loading, error } = useFetch(url);

  return (
    <>
      <Navbar />

      <section className="input">
        <input
          type="text"
          id="search"
          placeholder="Warcraft"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Search
        </button>
      </section>

      {!loading && <Card books={books} />}
      {loading && (
        <div id="spinner">
          <article className="article">
            <div className="spinner-border" role="status"></div>
            <span>Loading</span>
          </article>
        </div>
      )}
      {error && <div className="error">An error occured...try again</div>}
    </>
  );
};

export default Finder;
