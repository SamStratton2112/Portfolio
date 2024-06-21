import './Resume.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Resume = ()=>{
    return(
        <div className="Resume">
            <div className="Resume-title">
                <h1>Samantha Stratton</h1>
                <h2>Software Developer </h2>
                <Row className="contacts" lg={3} md={1}>
                <Col sm className="contact">San Diego, CA</Col>
                <Col sm className="contact">samstratton2112@gmail.com</Col>
                <Col sm className="contact">(347) 461-8409</Col>
                </Row>
            <div className='summary'>
            <span className="title">Summary</span>
            <br/>
                <p className='summaryMsg'>Dedicated and versatile professional with a diverse background and over a year of hands-on experience in full stack web development. Proficient in multiple languages, known for writing scalable, secure, and thoroughly tested code with an emphasis on readability. Demonstrates a strong aptitude for problem-solving and thrives in collaborative team settings. </p>
            </div>
            </div>
            <div className="Resume-skills">
            <span className="title">Technical Skills</span>
                <div className="ts">
                </div>
                <div className="Resume-skills-languages">
                    <label  htmlFor="languages">- Languages</label>
                    <p>JavaScript | Python | SQL | HTML | CSS</p>
                </div>
                <div className="Resume-skills-Frameworks-Libraries">
                    <label  htmlFor="frameworks-libraries">- Frameworks and Libraries</label>
                    <p id="frameworks-libraries">React.js | Node.js | Express.js | Axios | jQuery | Flask | Bootstrap | WTForms | Jinja | SQLAlchemy</p>
                </div>
                <div className="Resume-skills-testing">
                    <label  htmlFor="testing">- Testing</label>
                    <p id="testing">Jest | React Testing Library | Jasmine</p>
                </div>
            </div>
            <div className="work-experience">
                <span className="title wt">Work Experience</span>
                <div className="work-experience-job">
                    <p className="t">
                    Springboard Software Engineer- Trainee
                    <br/>
                    November 2022 - May 2024
                    </p>
                    <ul>
                    <li>- Designed, developed, tested, documented and deployed multiple Python and Javascript applications</li>
                    <li>- Demonstrated effective and diligent problem solving</li>
                    <li>- Identified and updated deprecated applications, increasing performance and security by 30%</li>
                    <li>- Created Stay worldly, a web application that enables users to learn about any city in the world and collect destinations</li>
                    <li>- Built a PERN web app to serve as an online store for Seven Bees honey company</li>
                    </ul>
                </div>
                <div className="work-experience-job">
                    <p className="t">
                    Civic Helicopters - Office Administrator 
                    <br/>
                    2020 - 2023
                    </p>
                    <ul>
                    <li>- Managed 20+ training schedules in compliance with FAR/AIM parts 141 and 61 over 3-4 month periods</li>
                    <li>- Increased part 141 graduation rate by 20% after creating and implementing a meticulous record keeping system</li>
                    <li>- Administered State and Federal Exams</li>
                    <li>- Maintained records of all helicopter maintenance and scheduled maintenance as necessary</li>
                    </ul>
                </div>
                <div className="work-experience-job">
                    <p className="t">
                    Bartender/server
                    <br/>
                    2015 - present
                    </p>
                    <ul>
                    <li>- Worked with teams of 100+ people and frequently trained new hires on operation standards</li>
                    <li>- Maintained quality service during the busiest of evenings which often surpassed 1,000 reservations</li>
                    <li>- Single handedly produced $15,000+ worth of beverage revenue in one extremely busy evening</li>
                    <li>- Possesses exceptional patience and effective problem-solving skills</li>
                    <li>- Excellent time management, organization and multitasking skills</li>
                    </ul>
                </div>
            </div>
            <div className="Resume-Education">
                <span className="title">Education</span>
                <div>
                    <p className="t">
                    Springboard - Software Engineer Certificate
                    <br/>
                    November 2022 - May 2024
                    </p>
                    <ul>
                        <li>- Online software engineering bootcamp with 700+ hours of hands-on course material</li>
                        <li>- 1 on 1 industry professional mentor oversight</li>
                    </ul>
                </div>
                <div>
                    <p className="t">
                    Civic Helicopters - Helicopter Pilot Training
                    <br/>
                    Carlsbad, CA | 2020-2023
                    </p>
                    <ul>
                        <li>- Obtained Private Helicopter License</li>
                        <li>- Some Commercial and Instrument License training</li>
                    </ul>
                </div>
                <div>
                    <p className="t">
                    Emerson College - Film Production
                    <br/>
                    Boston, MA | 2015-2016
                    </p>
                    <ul>
                        <li>- Completed 48 credits</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume