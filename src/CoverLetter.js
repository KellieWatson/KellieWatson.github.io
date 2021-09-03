import Profile from "./Profile";
import React from "react";
import "tailwindcss/tailwind.css"
import {Card, Container, Row} from "react-bootstrap";
import Objective from "./Objective";
import Qualifications from "./Qualifications";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Certifications from "./Certifications";
import "./style/CoverLetter.css"
function CoverLetter(){
    return(<div>
    <div className="text-white">

        <p className="Cover-Letter">
            My study in computer systems coupled with my extensive experience in
            customer service makes me a prime candidate for any highly productive development team.</p>
       <p> I would first like to expand upon the details of my education. In December 2015 I completed a Bachelor of
           Science in Computer Systems (Embedded Systems) at the Arizona State University, a
           division of the IRA A. Fulton Schools of Engineering. During the course of my education I developed
           a solid foundational understanding of computer systems and the networks they create. My studies include
           operating system development, low level logic and design, networking, distributed systems, and programming
           languages such as Java, C, C++, MASM, XML, and SQL. Additionally I have gained experience with configuring
           limited resource devices such as Arduino Microcontrollers and Raspberry Pi computer systems. Studying
           computers at these varied levels of abstraction has provided me the ability to move with ease and adapt to
           new systems and languages, each with nuances which require unique considerations. Moreover multiple
           perspectives has allowed me to more effectively and efficiently leverage these systems to solve societal and
           business concerns.</p>
        <p>
        In addition to my studies at Arizona State University I have been working as a fiduciary assistant. Over the
            past several years I have been exposed to most all aspects of small business. I have developed a more
            thorough understanding of finance, the impact of economic conditions, and the entrepreneurial aspects of
            corporate life. Employment as a fiduciary assistant has been a highly beneficial venture.
        My experience in the customer service industry has been extensive. In the past fifteen years I have worked at
            The Chart House in La Jolla, in the office of Richard Baddour M.D., Lotsa Pasta, and with the Western
            Athletic Clubs. In all these jobs personability and communication skills were essential: two of the traits
            that made me excel in each setting. At the Chart House I was promoted three times in three years and
            acknowledged at a yearly employee meeting for outstanding customer service. At Lotsa Pasta my positive
            attitude and friendly yet professional demeanor was quickly rewarded with the promotion to waitress. In
            each position I was valued for my excellence in collaborative endeavors, the ease with which I built rapport
            with the clientele, as well as for my attention to detail.
        </p>
        <p>
        I truly appreciate the consideration of my candidacy for your company and look forward to future correspondence.
        </p>
        <p> Sincerely,
        Kellie Watson
        </p>

    </div>
    </div>);
}
export default CoverLetter;