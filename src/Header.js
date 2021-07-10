import {Button, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import './style/Header.css'
function Header(){
    return(<Container fluid className="Header-container">
        <Navbar>
            <Nav className="Nav-bar">
                <Button variant="outline-light" className="Header-button">
                    <p >Expand All</p>
                </Button>
                <Button variant="outline-light" className="Header-button">
                    <p>By Section</p>
                </Button>
            </Nav>
        </Navbar>
    </Container>);
}
export default Header;