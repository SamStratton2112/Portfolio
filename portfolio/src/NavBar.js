import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/projects">Projects</NavLink>
        </nav>
    )
}

export default NavBar;