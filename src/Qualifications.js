import './style/Qualifications.css'

function Qualifications(){
 const qualifications = [   "Proficiency with Object Oriented Programming",
                            "Fundamental knowledge of Requirement Engineering and the Software Design Lifecycle ",
                            "Familiarity with Distributed Software Solutions",
                            "Excellent communication skills, both written and verbal",
                            "Adept facilitator of group discussion and negotiations ",
                            "Strong analytical and troubleshooting capabilities"];

    return(qualifications.map((qualification)=>
            <li className="Qualification-bullet" >{qualification.toString()}</li>
        ));


}

export default Qualifications;