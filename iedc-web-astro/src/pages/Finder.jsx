import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import './Finder.css'

function Finder() {
  const [search , setSearch] = useState("thelordoftherings")
   
   
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDkFtikGhuh-0n4oo6PCoJUrbHG0BFfZoM`;

  let {books,loading , error}= useFetch(url)
  
    return(
        <>
          <Navbar/>
          <input type="search" name="input" id="search"  placeholder='search' onChange={(e) =>setSearch(e.target.value)}/>
        <div className="component">
        {books && <Card books = {books} />}
        {loading && <div>loading data </div>}
        {error && <div>An error showing the message</div>}
        </div>
      
        </>
    )
}
export default Finder;