import "./Home.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import useFetch from "./useFetch";

const Home = () => {
  const apikey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=thelordoftherings&key=${apikey}`;

  let { books, loading, error } = useFetch(url);

  return (
    <div>
      <Navbar />

      <article className="article-info">
        <header className="welcome">Welcome to Booklib!</header>
        <section className="section-info">
          Find your favorite books here. Check out our popular picks below
        </section>
      </article>
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
    </div>
  );
};

export default Home;
