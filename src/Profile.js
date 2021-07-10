import profilePic from "./images/kelliewatson-selfie-square.jpg";
import './style/Profile.css';
import ContactInfo from "./ContactInfo";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

function Profile(){
    return(<Jumbotron className="Profile-div">
        <img src ={profilePic} className="Profile-image" alt="profile"/>
        <h1 className="Profile-name">Kellie Watson</h1>
        <h1 className="Job-title">Computer Engineer</h1>
        <ContactInfo/>
    </Jumbotron>);
}
export default Profile;