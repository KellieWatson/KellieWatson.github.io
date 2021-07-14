import './style/Qualifications.css'
import {ListGroup} from "react-bootstrap";

function Qualifications(){
 const qualifications = [   "Proficiency with Java SE and the Object Oriented Paradigm ",
                            "Fundamental knowledge of a variety of programming languages: Javascript C, C++, Python, SQL ",
                            "Familiarity with Git's distributed version control",
                            "Excellent communication skills, both written and verbal",
                            "Adept facilitator of group discussion and negotiations ",
                            "Strong analytical and troubleshooting capabilities",
                            "Eager contributor of production focused efforts"];

    return(qualifications.map((qualification)=>
            <ListGroup className="Qualifications"><li className="Qualification-bullet" >{qualification.toString()}</li></ListGroup>
        ));


}

export default Qualifications;