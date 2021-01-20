import React from 'react'
import {Link} from "react-router-dom";

export default function Header(props) {
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
                    <li><Link to='/Login'>Log In</Link></li>
                </ul>
                <div>
                    <p>{props.count}</p>
                </div>
            </header>
        </nav>
    )
}
