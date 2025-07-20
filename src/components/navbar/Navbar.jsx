import React, { useState } from 'react'
import style from "./Navbar.module.css";

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className={style.navbar}>
        <div className={`${style.container}`}>
            <div className={style.mylogo}>
                <div className={style.logo}><img src="/images/fceo-logo.jpg" alt="logo" /></div>
                <h2>FCE Ofeme Ohuhu</h2>
            </div>
            <button className={style.toggle_button} onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`${style.navbar_links} ${isOpen ? style.active : ''}`}>
                <a href="/" onClick={toggleNavbar}>Home</a>
                <a href="/academics" onClick={toggleNavbar}>Academics</a>                
                <a href="/administration" onClick={toggleNavbar}>Administration</a>
                <a href="/registry" onClick={toggleNavbar}>Registry</a>
                <a href="/ict" onClick={toggleNavbar}>ICT Center</a>
                <a href="#" onClick={toggleNavbar}>News</a>
                <a href="#" onClick={toggleNavbar} className={style.portal_btn}>Portal</a>
            </div>
        </div>
    </nav>
  )
}
