import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('')

    return (
        <div className='navbar'>
            <img src="/src/assets/logo.png" alt="" className='logo' />
            <ul className="navbar-menu">
                <li onClick={() => setMenu('home')} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
                <li onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact-us</li>
            </ul>
            <div className="navbar-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="navbar-search-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign-in</button>
            </div>
        </div>


    )
}

export default Navbar
