import React, { useState } from 'react'
import './Card.css'

function Card (props){

  const books = props.books

  const [imageError , setImageError] = useState(true)
   
  return (
    <>

    <div className="cards">
      {books.map((book, index) => (
        <div key={index} className="card" >
          {books && book.imageLinks &&setImageError(false) &&<img src={book.volumeInfo.thumbnail} className="card-img-top" alt={book.title}  />}
          {imageError && <p className='imageError'>No Thumbnail available</p>}
          <div className="card-body">
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <p className="card-text">{book.volumeInfo.authors}</p>
            <a href={book.volumeInfo.previewLink} className="btn btn-primary"  >Book</a>
          </div>
        </div>
      ))}
    </div>



    
     
    </>
  )
}

export default Card
