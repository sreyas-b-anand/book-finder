
import './Card.css'

function Card ({books}){
   
  let i = 0;
  return (
    <>

    <div className="cards">
      {books && books.map((book, index) => (
        <div key={index} className="card " >
          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="No images found" />
         <div className='card-content'>
         <header className='header-title'>
        {book.volumeInfo.title}
          </header>
          <section className='section-author'> 
          {book.volumeInfo.authors  && book.volumeInfo.authors.map((auth) =>(
   <li className='li-item' key={i++}>{auth}</li>
 ))}
          </section>
          <article className='article-link'>
          <a href={book.volumeInfo.previewLink} className="btn btn-primary" id="buttonlink" >Preview</a>
          <p  className='p-link'>Data provided by <a className='a-link' href="https://books.google.com/">Google Books</a></p>
          </article>
         </div>
        </div>
      ))}
    </div>



    
     
    </>
  )
}


export default Card
