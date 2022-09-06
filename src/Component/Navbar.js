import React from 'react'

import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <section id="header">
        <Link to="#"><img src="img/logo.png" alt="logo"/></Link>

        <div>
            <ul id="navbar">
                <li><i id="close-btn" class="fa-solid fa-close"></i></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="Blog">Blog</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="cart"><i class="fa-solid fa-bag-shopping"></i></Link></li>
            </ul>
        </div>

        <div id="mobile">
            <i class="fa-solid fa-bag-shopping"></i>
            <i id="bar" class="fa-solid fa-outdent"></i>
        </div>
    </section>
    )
}

export default Navbar