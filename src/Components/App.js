import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Login from "./Login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <NavBar />
                        <h1>Basketcases: an interactive portfolio.</h1>
                        <h4>This is where the unemployed Brian Mullin desperately tries to prove his Talent!!</h4>
                        <h5>{"Feel free to login to make fun of his work, track your progress on the variety of games, and explore GraphQL from the clientside without knowing what purpose it serves!!"}</h5>
                    </div>
                    <Route exact path={"/home"} component={Home}/>
                    <Route path={"/projects"} component={Projects}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    <Route exact path={"/login"} component={Login}/>
                </div>
            </BrowserRouter>
        );
    }
};
export default App;
