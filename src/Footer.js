import './style/Footer.css';
import {Container} from "react-bootstrap";

function Footer(){
    return(<Container fluid className="Footer-container"><footer>
        <a
        className="Website-link"
        href="https://www.watsonxyz.com/"
        target="_blank"
        rel="noopener noreferrer"
    >
        WatsonXYZ.com
    </a>
        <p className="Developed-by"> Created by WatsonXYZ </p></footer></Container>);
}

export default Footer;