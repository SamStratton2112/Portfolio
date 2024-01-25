import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <NavLink className="NavBar-link" to="/">Home</NavLink>
            <NavLink className="NavBar-link" to="/projects/complete">Completed Projects</NavLink>
            <NavLink className="NavBar-link" to="/projects/current">Current Projects</NavLink>
            <NavLink className="NavBar-link" to="/about">About</NavLink>
            <NavLink className="NavBar-link" to="/resume">Resume</NavLink>
        </nav>
    )
}

export default NavBar;