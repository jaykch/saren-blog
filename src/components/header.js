import React from 'react'
import {Link} from 'gatsby'
import './header.css'

import logo from '../images/logo-letters.png'

const Header = ({menuLinks}) => (
    <div id="header">
        <a href="/" className="title">
            <img src={logo} alt="Saren.io"/>
        </a>
        <nav className="navbar">
            <ul style={{display: "flex", flex: 1}}>
                {menuLinks.map(link => (
                    <li
                        key={link.name}
                        style={{
                            listStyleType: `none`,
                            padding: `1rem`,
                        }}
                    >
                        <Link style={{color: `white`}} to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                }}><a href="http://saren.io/">SAREN</a></li>
            </ul>
        </nav>
    </div>
);

export default Header
