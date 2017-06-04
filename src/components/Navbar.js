import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="Navbar">
        <a href="#" className="logo">Logo</a>
        <ul>
            <li><a href="#a">Test A</a></li>
            <li><a href="#b">Test B</a></li>
            <li><a href="#c">Test C</a></li>
            <li><a href="#d">Test D</a></li>
        </ul>
    </nav>
);

export default Navbar;