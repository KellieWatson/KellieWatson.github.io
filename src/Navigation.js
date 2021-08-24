import {Button, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import './style/Navigation.css'
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";
import Resume from "./Resume";
import Cover_Letter from "./Cover_Letter"
function Navigation(){
    return(<Container fluid className="Header-container">
        <BrowserRouter>
        <Navbar>
            <Nav className="Nav-bar">
                <Link to="/Cover_Letter" className="Topics">
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
            <Route exact path="/Resume" className="Route">{Resume}</Route>
            <Route exact path="/" className="Route" component={Cover_Letter}></Route>
        </Switch>
        </BrowserRouter>
    </Container>);
}
export default Navigation;