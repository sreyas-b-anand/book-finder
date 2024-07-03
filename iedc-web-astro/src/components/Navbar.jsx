import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
 
  
  
  
  return (
    <>
      <div className='navbar'>
        <header>Book Finder</header>
        
            <nav>
            <Link className='link'   to={'/'}>Home</Link>
            <Link className='link'   to={'/Books'}>Finder</Link>
       
            </nav>
      </div>
    </>
  )
}

export default Navbar
