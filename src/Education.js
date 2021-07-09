import {Card} from "react-bootstrap";
import './style/Education.css';
function Education(){
    const degrees =[{
        school:'Arizona State University',
        department:'IRA Fulton School of Engineering',
        degreeType:'Bachelor of Science',
        degree:'Computer Systems Embedded Systems',
        completionDate: Date.parse( "Decemeber 2015").toString(),
        campus:'Polytechnic',
        city: "Tempe",
        state: "Arizona"
    },
        {
            school:'Glendale Community College',
            department:'Technology',
            degreeType:'Associate in Applied Science',
            degree:'Cisco Networking Technology',
            completionDate: Date.parse( "2010").toString(),
            campus:'Main',
            city: "Glendale",
            state: "Arizona"
        }
    ];

   return(degrees.map(degree =>
       <Card>
           <Card.Title className="School">{degree.school}</Card.Title>
            <Card.Subtitle>{degree.degree}</Card.Subtitle></Card>))
}
export default Education;