import "./Sidebar.css";
import { Link } from "react-router-dom";
import list from "../assets/list.svg";


const Sidebar = () => {
  const button = document.querySelector(".button");
  const sidebar = document.querySelector(".sidebar");
  const handleClick = () => {
    sidebar.classList.toggle(".open");

    if (sidebar.classList.contains(".open")) {
      sidebar.style.display = "flex";
      button.style.transform = "translateX(-169px)";
    } else {
      sidebar.style.display = "none";
      button.style.transform = "translateX(0%)";
    }
  };
  return (
    <>
      <a role="button" className="button" onClick={handleClick}>
        <img src={list} />
      </a>
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/Books">Search</Link>
      </div>
    </>
  );
};

export default Sidebar;
