import './Nonlocal.css';
import { Link } from 'react-router-dom';

const Mike = ()=>{
    return(
        <div className='PreFlight'>
            <br/>
            <h1>M. White Professional Portfolio</h1>
            <div>
                <label htmlFor='link'>Check Mike White's portfolio here: </label>
                <Link id="link" to='https://mikewhite.onrender.com'><button className='btn'>M.White Portfolio</button></Link>

                <Link id="link" to='https://github.com/SamStratton2112/MWhite'><button className='btn'>M.White Portfolio - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                This static web app is crafted to showcase a comprehensive professional portfolio for my client, emphasizing his diverse talents as an actor, model, and DJ. It offers a polished overview of his career, featuring a detailed biography, notable accomplishments in each field, and information about his current residencies. Additionally, a user-friendly contact page facilitates easy outreach for potential collaborators, clients, and fans. The app is designed to provide an engaging experience that authentically reflects the client’s unique artistic identity.
                </p>
                <p>Tech Stack: JavaScript | React.js | CSS | HTML | Bootstrap | Jest | Emailjs</p>
               
            </div>
        </div>
    )
}

export default Mike;