import {Card, Col, Row} from "react-bootstrap";
import './style/Certifications.css';
function Certifications(){
    const certifications = [         {
        certification : "Oracle Certified Professional, Java SE 8 Programmer",
        issueBy:"Oracle",
        completionDate : "2020",
        expirationDate : "June 14, 2022",
    },
        {
        certification : "Oracle Certified Associate, Java SE 8 Programmer",
        issueBy:"Oracle",
        completionDate : "2020",
        expirationDate : "May 17, 2022",
    }]
    return(certifications.map(certificate => <Card className="Certification-card"><Row><Col xs={2} className="Completion-date">{certificate.completionDate}</Col>
        <Col><Card.Title className="Certificate-title">{certificate.certification}</Card.Title></Col></Row></Card>))
}
export default Certifications;