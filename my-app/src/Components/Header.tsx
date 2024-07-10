import React from "react";
import hamburger from '../Images/hamburger.png';


const Header:  React.FC  = () => {
    return(
        <div className="header">
            <span className="hamburger">
                <img src={hamburger} alt="hamburgur pic" />
            </span>
            <span className="logo">
                <a href="#">room</a>
            </span>
            <span className="nav-links">
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </span>
            <span className="dropdwon">
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </span>
        </div>
    );
}

export default Header;