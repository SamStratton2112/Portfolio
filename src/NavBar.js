import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar">
          <Navbar.Brand as={Link} to="/" className='me-auto nav-name'>Samantha Stratton</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='NavBar-link' as={Link} to="/projects/complete">Software Engineering Projects</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/projects/current">Current Projects</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/resume">Resume</Nav.Link>
                <Nav.Link className='NavBar-link' as={Link} to="/certifications">Certifications</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;