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
                <p className='summaryMsg'>Adaptable full stack developer with over two years of hands-on experience building secure, scalable applications. Proven ability to write maintainable code focused on performance and readability. Demonstrates a strong aptitude for problem-solving and thrives in collaborative team settings. </p>
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
                <div className="Resume-skills-database">
                    <label  htmlFor="database">- Database Management</label>
                    <p id="database">PostgreSQL</p>
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
                    <li>- Designed, developed, tested, documented and deployed multiple web applications in Javascript and Python.</li>
                    <li>- Demonstrated effective and diligent problem solving abilities.</li>
                    <li>- Identified and updated deprecated applications, increasing performance and security by 30%.</li>
                    <li>- Created Stay worldly, a web application that educates users about any city in the world.</li>
                    <li>- Built a PERN web app to serve as an online store for Seven Bees honey company.</li>
                    </ul>
                </div>
                <div className="work-experience-job">
                    <p className="t">
                    Civic Helicopters - Office Administrator 
                    <br/>
                    2020 - 2023
                    </p>
                    <ul>
                    <li>- Regularly managed 20+ training schedules in compliance with FAR/AIM parts 141 and 61 over 3-4 month periods.</li>
                    <li>- Optimized record-keeping processes allowing for more students to meet program requirements efficiently, resulting in a 20% increase in graduation rates under Part 141.</li>
                    <li>- Administered State and Federal Exams.</li>
                    <li>- Maintained records of all helicopter maintenance and scheduled maintenance as necessary.</li>
                    </ul>
                </div>
                <div className="work-experience-job">
                    <p className="t">
                    Bartender/server
                    <br/>
                    2015 - present
                    </p>
                    <ul>
                    <li>- Collaborated with both small and large teams to deliver high-quality service in fast-paced environments.</li>
                    <li>- Consistently demonstrated exceptional time management and resourcefulness when overcoming obstacles.</li>
                    <li>- Assisted in training new hires on service standards, fostering a cohesive and efficient team.</li>
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
                        <li>- Online software engineering bootcamp with 700+ hours of hands-on course material.</li>
                        <li>- 1 on 1 industry professional mentor oversight.</li>
                    </ul>
                </div>
                <div>
                    <p className="t">
                    Civic Helicopters - Helicopter Pilot Training
                    <br/>
                    Carlsbad, CA | 2020-2023
                    </p>
                    <ul>
                        <li>- Obtained Private Helicopter License.</li>
                        <li>- Some Commercial and Instrument License training.</li>
                    </ul>
                </div>
                <div>
                    <p className="t">
                    Emerson College - Film Production
                    <br/>
                    Boston, MA | 2015-2016
                    </p>
                    <ul>
                        <li>- Completed 48 credits.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume