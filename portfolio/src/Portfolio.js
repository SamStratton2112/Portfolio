import { Link } from "react-router-dom";
import './Portfolio.css'

const Portfolio = ()=>{
    return(
        <div className='Portfolio'>
            <h1>Portfolio</h1>
            <div>
                <label htmlFor='link'>Check out the repository here: </label>
                <Link id="link" to='https://github.com/SamStratton2112/Portfolio.git'><button className='btn'>Portfolio - GitHub</button></Link>
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