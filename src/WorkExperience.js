import {Card, Col, Row} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import './style/WorkExperience.css';

function WorkExperience(){

    const workExperiences = [
        {
            company: 'Alan Watson',
            jobTitle:'Fiduciary Assistant',
            city: 'Sun City',
            state:'Arizona',
            hireDate: 2013,
            lastDayWorked: "Present",
            contacts:['Alan Watson'],
            description:["Increased revenue and facilitated decreased portfolio risk through the implementation of Option Strategies",
                "Reduced storage waste by digitizing documentation",
"Increased data availability by restructuring financial records into digital format ",
"Implemented disaster recovery of vital documents",
"Improved work productivity by reorganizing office layout",
"Counseled employer through the selection of additional financial advisor and partnering business associates"]
        },
        {
            company: 'Illuminating Minds Computer Tech',
            jobTitle:'Owner',
            city:'Phoenix',
            state:'Arizona',
            hireDate: 2011,
            lastDayWorked: 2013,
            contacts:[],
            description:["Provided a trusted resource for the community to get reliable information about their computer systems",
                "Ensured client satisfaction through regular communication with the client throughout the service",
                "Dealt well with ambiguity, proved able to take action and move forward when circumstance unclear and the problem not  clearly defined.",
                "Researched and developed new skills as necessary to adequately address the needs of the clientele",
                "Instilled confidence and trust that customer equipment and data would be well cared for and privacy maintained.",
                "Educated clientele on Windows computer systems and provided recommendations for improved computing experiences",
                "Amplified sense of community through regular application of name recognition"]
        },
        {
            company: 'Staples',
            jobTitle:'Easy Tech Expert',
            city:'Phoenix',
            state:'Arizona',
            hireDate:2010,
            lastDayWorked:2011,
            contacts:['Robbie', 'Minna', 'Chuck', 'Ed'],
            description:["Integrated seamlessly with accompanying work staff to provide customers with superior technical support",
                "Produced additional profits for company by seizing all marketing opportunities for both retail and service products",
                "Trained entry-level Easy Tech Associates on computer repair solutions and proper handling of customer equipment",
                "Supported cohesive relations by regularly scanning for opportunities to support fellow employees efforts",
                "Instituted an exemplary work ethic to promote a positive work atmosphere"]
        }];
/**


 workExperiences.map(experience => <li className="Work-experience" >{experience.company.toString()}{' '}
 {experience.jobTitle}</li>)

 **/

    return( workExperiences.map(experience =>
        <Card className="Work-experience" >
        <Card.Header className="Work-header">
            <Row>
            <Col xs={3} className="Timeframe">{experience.hireDate} - {experience.lastDayWorked} </Col>
            <Col className="Job-data">
                  <Row>
                      <Col md="auto" className="Company-name">{experience.company.toString()}:</Col>
                    <Col  className="Job-title">{experience.jobTitle}</Col>
                  </Row>
                <Row className="Location">{experience.city}, {experience.state}</Row>
            </Col>
            </Row>
        </Card.Header>
        <Card.Body className="Experience-details">
            <Card.Text>{experience.description.map(impact => <li className="Impact">{impact.valueOf()}</li>)}</Card.Text>
        </Card.Body>
    </Card>) )
}

export default WorkExperience;


