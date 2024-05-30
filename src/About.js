import { Link } from "react-router-dom";
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
                    I am a determined professional with a diverse background and a deep appreciation for logical reasoning. Originally aspiring to be a helicopter pilot, I shifted my focus to technology after witnessing the outdated software plaguing the aviation industry.
                    </p>
                    <p>
                    Discovering a passion for software development, I pursued it further and now have over a year of experience in full stack web development. I've worked on 3 major projects using various languages, including JavaScript and Python, along with libraries and frameworks like React, Express, and Flask as well as Node.js. From portfolios to online stores to RESTful API development, my full stack skill set is ever expanding.  
                    </p>
                    <p>
                    The transition from the cockpit to the command line has been an exhilarating journey. I am eager to contribute my skills to new projects and continuously learning within a collaborative environments.
                    </p>
                    <div className="links">
                        <button className="btn"><Link className="link" to='https://github.com/SamStratton2112'>GitHub</Link></button>
                        <button className="btn"><Link className="link" to='https://www.linkedin.com/in/samantha-a-stratton/'>LinkedIn</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;