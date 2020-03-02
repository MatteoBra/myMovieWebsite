import React from 'react';

import {Link} from 'react-router-dom';

import logo from './tmbd.png'

function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container">
                <ul className="navbar-nav text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                    </li>
                    <li className="nav-item d-inline-block mr-4">
                        <img
                        src = {logo}
                        style = {{width: '73px', height: '73px', marginTop: '-50px'}}
                        alt = "logo"
                        />
                    </li>
                </ul>
                <div className="navbar-header">
                    <Link className="text-lg brand-text" to="/">
                    MyMovieWebsite
                    </Link>
                </div>

            </div>
        </nav>           
    </div>
    )
}

export default Navbar

