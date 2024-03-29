import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return(
        <div className="Nav-container">
            <nav className="NavBar">
                <NavLink className="NavBar-link-home" to="/">Sam Stratton</NavLink>
                <div className="right NavBar-link">
                <NavLink className="NavBar-link" to="/projects/complete">Completed Projects</NavLink>
                <NavLink className="NavBar-link" to="/projects/current">Current Projects</NavLink>
                <NavLink className="NavBar-link" to="/resume">Resume</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;