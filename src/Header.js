import {Container} from "react-bootstrap";
import Navigation from "./Navigation";
import Profile from "./Profile";
import './style/Header.css';
function Header (){
    return(
        <Container fluid className="Resume-Header">

            <Profile/>

        </Container>
    )
}

export default Header;
