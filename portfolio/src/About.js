import { Link } from "react-router-dom";

const About = () =>{
    return(
        <div>
            <h1>Samantha Stratton</h1>
            <p>
                I am a determined individual with a diverse background and a passion for logical reasoning. Originally aspiring to be a helicopter pilot, my journey took an unexpected turn when I decided to venture into the world of technology after witnessing firsthand the outdated software plaguing the aviation industry.
            </p>
            <p>
                 Motivated by the aspiration to be a part of the evolution of tech, I embarked on Springboard’s software engineering bootcamp. I not only honed my skills in coding but also discovered a new and exciting passion. 
            </p>
            <p>
                The transition from the cockpit to the command line has been an exhilarating ride, and I am eager to continue my journey in the ever-evolving field of tech as a software developer. 
            </p>
            <label>Other links</label>
            <ul>
                <li><Link to='https://www.linkedin.com/in/samantha-a-stratton/'>LinkedIn</Link></li>
                <li><Link to='https://github.com/SamStratton2112'>GitHub</Link></li>
            </ul>
        </div>
    )
}

export default About;