import {Card, Col, Row} from "react-bootstrap";
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
            completionDate:"May 2010",
            campus:'Main',
            city: "Glendale",
            state: "Arizona"
        }
    ];

   return(degrees.map(degree =>
       <Card className="Degree-card">
           <Row>
               <Col xs={2}>{degree.completionDate}</Col>
               <Col>
                 <Card.Title className="Degree">{degree.school}: {degree.department}</Card.Title>
                 <Card.Subtitle className="Department">{degree.degree}, {degree.degreeType}</Card.Subtitle>
                <Card.Body className ="School">
                </Card.Body>
            </Col>
           </Row>
           <Row></Row>
       </Card>))
}
export default Education;