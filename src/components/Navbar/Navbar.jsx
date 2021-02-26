import React from "react";
import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div><NavLink to="/dialogs">Flood</NavLink></div>
            <div><NavLink to="/questions">Work</NavLink></div>
        </nav>
    )
}

export default Navbar;