import {Button, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import './style/Navigation.css'
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter.js"
function Navigation(){
    return(<Container fluid className="Header-container">
        <BrowserRouter>
        <Navbar>
            <Nav className="Nav-bar">
                <Link to="/CoverLetter" className="Topics">
                <Button variant="outline-light" className="Header-button">
                    <p>Cover Letter</p>
                </Button>
                </Link>
                <Link to="/Resume" className="Topics">
                <Button variant="outline-light" className="Header-button">
                    <p>Resume</p>
                </Button>
                </Link>
            </Nav>
        </Navbar>
        <Switch>
            <Route exact path="/" className="Route" component={CoverLetter}></Route>
            <Route exact path="/CoverLetter" className="Route" component={CoverLetter}></Route>
            <Route path="/Resume" className="Route">{Resume}</Route>
        </Switch>
        </BrowserRouter>
    </Container>);
}
export default Navigation;