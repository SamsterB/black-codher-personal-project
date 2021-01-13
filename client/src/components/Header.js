import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <div>
                <img src="/images/logo.jpg" alt=""/>
            </div>
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
