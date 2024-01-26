import { Link } from "react-router-dom";
import './Portfolio.css'

const Portfolio = ()=>{
    return(
        <div className='Portfolio'>
            <h1>Portfolio</h1>
            <div className="links">
                <label htmlFor='link'>Check out the repository here: </label>
                <Link  id="link" className="link" to='https://github.com/SamStratton2112/StayWorldly'><button className='btn'>Portfolio - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                    To properly demonstrate what I've learned from Springboard's software engineering bootcamp, I built this website. 
                </p>
                <p>Tech Stack: React.js | CSS | Jest</p>
            </div>
        </div>
    )
}

export default Portfolio;