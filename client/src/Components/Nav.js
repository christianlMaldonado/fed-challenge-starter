import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../Assets/ifitlogo.jpg"

// This is the Navigation bar with some custom inline CSS
function Nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul className="nav-links"> 
                <Link style={navStyle} to="/">
                    <li> Home </li>
                </Link>
                <p> | </p>
                <a class="nav-link" href="https://www.linkedin.com/company/ifit---fitness-technology/"> iFit LinkedIn </a> 
                <p> | </p>
                <a class="nav-link" href="https://github.com/christianlMaldonado/fed-challenge-starter"> iFit GitHub Challenge </a> 
                <p> | </p>
                <a class="nav-link" href="https://www.linkedin.com/in/christian-maldonado/"> Christian's LinkedIn </a> 
                <p> | </p>
                <a class="nav-link" href="https://github.com/christianlMaldonado"> Christian's GitHub </a> 
            </ul>
        </nav>
    );
}

export default Nav;