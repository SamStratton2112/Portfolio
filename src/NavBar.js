import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar">
          <Navbar.Brand href="/" className='me-auto nav-name'>Samantha Stratton</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='NavBar-link' href="/projects/complete">Software Engineering Projects</Nav.Link>
                <Nav.Link className='NavBar-link' href="/projects/current">Current Projects</Nav.Link>
                <Nav.Link className='NavBar-link' href="/resume">Resume</Nav.Link>
                <Nav.Link className='NavBar-link' href="/certifications">Certifications</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;