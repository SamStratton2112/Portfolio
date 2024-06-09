import { Link, NavLink } from "react-router-dom";
import './About.css'
import headshot from './static/headshot.png'

const About = () =>{
    return(
        <div className="About">
            <h1 className="About-name">Sam Stratton</h1>
            <div className="contacts">
                <span className="contact">San Diego, CA</span>
                <span className="contact">samstratton2112@gmail.com</span>
                <span className="contact">(347) 461-8409</span>
            </div>
            <div className="details">
                <div className="headshot">
                    <img className="img" src={headshot} alt='Headshot'/>
                </div>
                <div className="About-paragraphs ">
                    <p>
                    I am a passionate and driven professional with a unique journey from aspiring helicopter pilot to dedicated software engineer. My transition into technology was sparked by a desire to modernize the outdated software systems I encountered in aviation.
                    </p>
                    <p>
                    Pursuing this newfound passion, I completed Springboard's software engineering course, where I developed a robust skill set in full stack web development. With over a year of hands-on experience, I have successfully delivered three major projects. My technical expertise spans languages such as JavaScript and Python, and I am proficient with libraries and frameworks including React, Express, Flask, and Node.js among others.
                    </p>
                    <p>
                    My project portfolio includes developing professional portfolios, building online stores, and designing RESTful APIs, all of which showcase my expanding capabilities in the full stack domain. This journey from the cockpit to the command line has been thrilling, and I am excited to bring my skills and enthusiasm to innovative projects.
                    </p>
                    <p>
                    I thrive in collaborative environments and am eager to contribute to impactful projects while continuously advancing my knowledge and skills.
                    </p>
                    <p>
                    <b>Front-End:</b> JavaScript | React.js | jQuery | HTML | CSS | Bootstrap | Jinja | Jasmine
                    <br/>
                    <b>Back-End:</b> Python | Flask | Node.js | Express.js | PostgreSQL | SQLAlchemy
                    <br/>
                    <b>Testing:</b> Jest | Jasmin | React Testing Library    
                    </p>
                    
                </div>
            </div>
            <div className="links">
                        <button className="btn"><NavLink className="link" to='/projects/complete'>Completed Projects</NavLink></button>
                        <button className="btn"><Link className="link" to='https://github.com/SamStratton2112'>GitHub</Link></button>
                        <button className="btn"><Link className="link" to='https://www.linkedin.com/in/samantha-a-stratton/'>LinkedIn</Link></button>
                    </div>
        </div>
    )
}

export default About;