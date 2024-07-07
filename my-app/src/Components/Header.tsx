import React from "react";


const Header:  React.FC  = () => {
    return(
        <div className="header">
            <span className="logo">
                <a href="#">room</a>
            </span>
            <span>
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </span>
        </div>
    );
}

export default Header;