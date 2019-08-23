import React from 'react';
import '../CSS/HomeCSS.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">[LOGO]</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"><Link to="/">Home <span className="sr-only">(current)</span></Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/MovieOfTheWeek">Movie Of the Week </Link></a>
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Discussion Starters
              </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item"><Link to="/TopTens">Top Tens</Link></a>
                                <a className="dropdown-item" href="#">Drafts</a>
                                <a className="dropdown-item"><Link to="/MostOverrated">Most Overrated Actor</Link></a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search for a Movie" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;