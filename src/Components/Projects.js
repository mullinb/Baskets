import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

class Projects extends Component {

    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li>Idle Miner Mockup</li>
                    <li>Zombie Smash</li>
                    <li>Space Box Banger</li>
                    <li>Petition To Improve The Discourse</li>
                </ul>
            </div>
        );
    }
};
export default Projects;
