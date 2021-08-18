import './style/Qualifications.css'
import {ListGroup} from "react-bootstrap";

function Qualifications(){
 const qualifications = [   "Proficiency with Java SE and the Object Oriented paradigm",
                            "Experience programming IoT with RaspberryPi and Arduino",
                            "Familiarity with Git's distributed version control",
                            "Adept facilitator of group discussion and negotiations ",
                            "Excellent communication skills, both written and verbal",
                            "Strong analytical and troubleshooting capabilities",
                            "Eager contributor of production focused efforts"];

    return(qualifications.map((qualification)=>
            <ListGroup className="Qualifications"><li className="Qualification-bullet" >{qualification.toString()}</li></ListGroup>
        ));


}

export default Qualifications;