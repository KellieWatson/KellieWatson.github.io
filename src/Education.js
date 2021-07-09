import {Card} from "react-bootstrap";
import './style/Education.css';
function Education(){
    const degrees =[{
        school:'Arizona State University',
        department:'IRA Fulton School of Engineering',
        degreeType:'Bachelor of Science',
        degree:'Computer Systems Embedded Systems',
        completionDate: "Decemeber 2015",
        campus:'Polytechnic',
        city: "Tempe",
        state: "Arizona"
    },
        {
            school:'Glendale Community College',
            department:'Computer Science Department',
            degreeType:'Associate in Applied Science',
            degree:'Cisco Networking Technology',
            completionDate:2010,
            campus:'Main',
            city: "Glendale",
            state: "Arizona"
        }
    ];

   return(degrees.map(degree =>
       <Card className="Degree-card">
           <Card.Title className="Degree">{degree.school}</Card.Title>
           <Card.Subtitle className="Department">{degree.department}</Card.Subtitle>
           <Card.Body className ="School">
               <li>{degree.degreeType} in {degree.degree}</li>
               <li>Completion Date: {degree.completionDate}</li>
           </Card.Body>
       </Card>))
}
export default Education;