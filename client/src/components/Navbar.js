import React from "react";


function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className={window.location.pathname === "/search" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/search">Search</a>
                </li>
                <li className={window.location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;