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
                    This website showcases the skills I honed during Springboard's software engineering bootcamp
                </p>
                <p>Tech Stack: JavaScript | React.js | CSS | Jest</p>
            </div>
        </div>
    )
}

export default Portfolio;