import React, { useState } from 'react'
import "./Navbar.css";

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
        <div className="container-fluid dropdown">
            <div className="mylogo">
                <div className='logo'><img src="/images/fceo-logo.jpg" alt="logo" /></div>
                <h2>FCE Ofeme Ohuhu</h2>
            </div>
            <button className="toggle-button" onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="/" onClick={toggleNavbar}>Home</a>
                <a href="/academics" onClick={toggleNavbar}>Academics</a>                
                <a href="/administration" onClick={toggleNavbar}>Administration</a>
                <a href="#" onClick={toggleNavbar}>Registry</a>
                <a href="#" onClick={toggleNavbar}>ICT Center</a>
                <a href="#" onClick={toggleNavbar} className='portal-btn'>Portal</a>
            </div>
        </div>
    </nav>
  )
}
