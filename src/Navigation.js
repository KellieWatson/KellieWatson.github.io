import {Button, Card, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import './style/Navigation.css'
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter.js"
import profilePic from "./images/kelliewatson-selfie-square.jpg";
import ContactInfo from "./ContactInfo";
import Profile from "./Profile";
function Navigation(){
    return(<Container fluid className="Header-container">
        <BrowserRouter>
        <Navbar>
            <div className="grid justify-content-stretch">
            <Nav className="flex items-center flex-wrap p-4">
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
            <Profile/>
            </Nav>
            </div>
        </Navbar>
        <Switch>
            <Route exact path="/" className="Route" component={Resume}></Route>
            <Route exact path="/CoverLetter" className="Route" component={CoverLetter}></Route>
            <Route path="/Resume" className="Route">{Resume}</Route>
        </Switch>
        </BrowserRouter>
    </Container>);
}
export default Navigation;