import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// all components start like this, they always need to render something
export default class Navbar extends Component {

    // this is basically just the navbar from bootstrap documentation
    render(){
        return (
            // instead of a hrefs, we just use Links
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className = "navbar-brand">ExcerTracker</Link>
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "navbar-item">
                            <Link to = "/" className = "nav-link">Exercises</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/create" className = "nav-link">Create Exercise Log</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/user" className = "nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
                </nav>
        )
    }
}