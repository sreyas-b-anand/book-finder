import { Link  } from "react-router-dom";
import "./Navbar.css";
import book from "../assets/book.jpg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <section>
          <img src={book} className="logo" />
          <header>Booklib</header>
        </section>
        <nav className="nav">
          <Link className="link" to={'/'}>
            Home
          </Link>
          <Link className="link" to={'/Books'}>
            Search
          </Link>
        </nav>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
