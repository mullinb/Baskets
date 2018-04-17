import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <div>
            <ul className="nav-bar">
                <li className="nav-bar-elems">
                    <Link to="/home">Home</Link>
                </li>
                 <li className="nav-bar-elems">
                    <Link to="/projects">InterProjactivects</Link>
                </li>
                 <li className="nav-bar-elems">
                    <Link to="/contact">Contact</Link>
                </li>
                 <li className="nav-bar-elems">
                    <Link to="/login">Login</Link>
                </li>
                </ul>
            </div>
        )
    }
};

export default NavBar;
