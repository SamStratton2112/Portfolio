import './Nonlocal.css';
import { Link } from 'react-router-dom';

const Mike = ()=>{
    return(
        <div className='PreFlight'>
            <br/>
            <h1>M. White Professional Portfolio</h1>
            <div>
                <label htmlFor='link'>Check out the repository here: </label>
                <Link id="link" to='https://github.com/SamStratton2112/MWhite'><button className='btn'>M.White Portfolio - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                This static web app is designed to showcase a comprehensive professional portfolio for my client, highlighting his diverse talents as an actor, model, and DJ. The app will feature a polished overview of his career, including a detailed biography, notable accomplishments across industries, and information about his current residencies. A dedicated contact page will also be included, equipped with an email form, making it easy for potential collaborators, clients, and fans to reach out directly. The app aims to create an engaging and user-friendly experience, reflecting the client's unique artistic profile.
                </p>
                <div>
                    <span>Current Stage: Developement</span>
                </div>
            </div>
        </div>
    )
}

export default Mike;