import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
      <>
        <nav>
        <div className='logo'>Tends To Trends</div>
            <ul className='navtitle'>
                <li>Home</li>
                <li>Gallery</li>
                <li>About</li>
            </ul>
            <button>Sign in</button>
        </nav>
      </>
    );
  }

export default Navbar
