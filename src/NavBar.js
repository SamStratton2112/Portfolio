import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar navbar-static-top">
          <Navbar.Brand as={Link} to="/" className='me-auto nav-name'>Samantha Stratton</Navbar.Brand>
          
          <Nav className="ms-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link className='NavBar-link' as={Link} to="/projects/complete"> Completed Projects</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/projects/current">Current Projects</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/resume">Resume</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/certifications">Certifications</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/contact">Contact</Nav.Link>
          </Navbar.Collapse>

            </Nav>
      </Navbar>
    )
}

export default NavBar;