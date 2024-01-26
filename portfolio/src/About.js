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
                        I am a determined individual with a diverse background and a deep appreciation for logical reasoning. Originally aspiring to be a helicopter pilot, my journey took an unexpected turn when I decided to venture into the world of technology after witnessing firsthand the outdated software plaguing the aviation industry.
                    </p>
                    <p>
                        Motivated by the aspiration to be a part of the evolution of tech, I embarked on Springboard’s software engineering bootcamp. I not only honed my skills in coding but also discovered a new and exciting passion. 
                    </p>
                    <p>
                        The transition from the cockpit to the command line has been an exhilarating ride, and I am eager to continue my journey in the ever-evolving field of tech as a software developer. 
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