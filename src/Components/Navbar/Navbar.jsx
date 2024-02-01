import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className='Navigation'>
      <a href='#' className='logo'>Mehreen Shakeel</a>
      <div className='navBar'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skill</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
