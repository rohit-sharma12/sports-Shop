import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('')
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to='/'> <img src="/src/assets/logo.png" alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link href='/' onClick={() => setMenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='' onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='' onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='' onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
            </ul>
            <div className="navbar-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="navbar-search-icon">
                    <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign-in</button>
            </div>
        </div>


    )
}

export default Navbar
