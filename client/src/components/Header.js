import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <header className="row block centered">
                <div>
                    <img src="/images/logo.jpg" alt=""/>
                </div>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div>
                    <a href="#/cart">Cart</a>
                </div>
            </header>
        </nav>
    )
}
