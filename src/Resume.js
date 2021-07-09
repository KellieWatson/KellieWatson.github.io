import profile from "./images/kelliewatson-selfie-square.jpg";
import './style/Resume.css';
import Qualifications from "./Qualifications";
import Profile from "./Profile";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Certifications from "./Certifications";
import {Container} from "react-bootstrap";

function Resume(){

    return(
    <Container fluid='xl' className="App-header">
        <Profile/>
        <ContactInfo/>
        <div className="Section"><h3 className="Section-header">Objective</h3><p>To partner with a diverse team and to leverage technology for the benefit of improved production and human innovation.</p></div>
        <div className= "Section">
            <h3 className="Section-header">Qualifications</h3>
            <Qualifications/>
        </div>
        <div className= "Section">
            <h3 className="Section-header">Work Experience</h3>
            <div>
            <WorkExperience/>
            </div>
        </div>
        <div className= "Section">
            <h3 className="Section-header">Education</h3>
            <Education/>
        </div>
        <div className= "Section">
            <h3 className="Section-header">Certifications</h3>
            <Certifications/>
        </div>
        <Footer/>
    </Container>
    );
}
export default Resume;