import {Card} from "react-bootstrap";
import './style/Certifications.css';
function Certifications(){
    const certifications = [ {
        certification : "Oracle Certified Associate, Java SE 8 Programmer",
        issueBy:"Oracle",
        completionDate : Date.parse("May 17, 2020").toString(),
        expirationDate : Date.parse("May 17, 2022").toString(),
    },
        {
            certification : "Oracle Certified Professional, Java SE 8 Programmer",
            issueBy:"Oracle",
            completionDate : Date.parse("June 14, 2020").toString(),
            expirationDate : Date.parse("June 14, 2022").toString(),
        }]
    return(certifications.map(certificate => <Card className="Certification-card"><Card.Title className="Certificate-title">{certificate.certification}</Card.Title></Card>))
}
export default Certifications;