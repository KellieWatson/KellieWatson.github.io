import profile from "./kelliewatson-selfie-square.jpg";
import Qualifications from "./Qualifications";
import Profile from "./Profile";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Certifications from "./Certifications";

function Header(){

    return(
    <header className="App-header">
        <Profile/>
        <ContactInfo/>
        <div className="Section"><h3 className="Section-header">Objective</h3><p>To partner with the diverse team at Intel to help support the development of new innovation in technology.</p></div>
        <div className= "Section">
            <h3 className="Section-header">Qualifications</h3>
            <Qualifications/>
        </div>
        <div className= "Section">
            <h3 className="Section-header">Work Experience</h3>
            <WorkExperience/>
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
    </header>
    );
}
export default Header;