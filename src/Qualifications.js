import './style/Qualifications.css'
import {ListGroup} from "react-bootstrap";

function Qualifications(){
 const qualifications = [   "Proficiency with Object Oriented Programming",
                            "Fundamental knowledge of Requirement Engineering and the Software Design Lifecycle ",
                            "Familiarity with Distributed Software Solutions",
                            "Excellent communication skills, both written and verbal",
                            "Adept facilitator of group discussion and negotiations ",
                            "Strong analytical and troubleshooting capabilities"];

    return(qualifications.map((qualification)=>
            <ListGroup className="Qualifications"><li className="Qualification-bullet" >{qualification.toString()}</li></ListGroup>
        ));


}

export default Qualifications;