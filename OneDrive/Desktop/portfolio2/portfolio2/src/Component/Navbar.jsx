import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <h1 className='logo'>It's My Portfolio </h1>
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>
                <button className='content-text' onClick={()=>{}}>Here Me</button>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar