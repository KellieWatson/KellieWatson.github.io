import profile from "./images/kelliewatson-selfie-square.jpg";
import './style/Profile.css';
import ContactInfo from "./ContactInfo";
import {Jumbotron} from "react-bootstrap";

function Profile(){
    return(<Jumbotron className="Profile-div">
    <img src ={profile} className="Profile-image" alt="profile"/>
    <h1 className="Profile-name">
        Kellie Watson
    </h1>
        <h2 className="Job-title">Computer Engineer</h2><ContactInfo/></Jumbotron>);
}

export default Profile;