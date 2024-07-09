import './Home.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import useFetch from './useFetch';

const Home = () => {
  const apikey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=thelordoftherings&key=${apikey}`

  let { books , loading , error} = useFetch(url)
  
  return (
    <div>
      <Navbar/>
      <article className='article-info'>
        Welcome to Booklib , where you can find your favorite books.
        Here are some popular books
      </article>
      {!loading&& <Card books={books} />}
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
    
  )
}

export default Home
