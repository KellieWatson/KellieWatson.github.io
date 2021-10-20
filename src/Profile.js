import profilePic from "./images/kelliewatson-selfie-square.jpg";
import './style/Profile.css';
import ContactInfo from "./ContactInfo";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Navigation from "./Navigation";

function Profile(){
    return(            <div className="md:mx-80">
        <div className="mx-20">
            <img src ={profilePic} className="xs:invisible md:visible rounded-full h-5 w-5 lg:visible rounded-full h-20 w-20" alt="profile"/>
        </div>
        <h1 className="Profile-name pt-2 text-4xl">Kellie Watson</h1>
        <h1 className="Job-title pt-0 ">Computer Engineer</h1>
        <ContactInfo/>
    </div>);
}
export default Profile;