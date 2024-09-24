
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import "./Navtop.css"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const NavTop = () => {
    


    return (
        <div className='menu'>
        <Navbar className= "navbar" expand="lg">
            <Container className='nav-cont'>
                <Navbar.Brand href="#home" className="brand">RZUĆ PALONKO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/" className='link'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about" className='link'>About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cigarette" className='link'>Palisz? Kliknij</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/propose" className='link'>Twój Cel</Link>
                        </Nav.Link>
                        
                        <NavDropdown title="Statystyki" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Bilans dzienny</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.3">Wczoraj- dziś</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.4">
                            Bilans tygodniowy
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                    <DropdownButton  title="Profil" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Profil</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Sing In</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Sing Up</Dropdown.Item>
                    </DropdownButton>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default NavTop;