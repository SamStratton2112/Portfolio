import './PreFlight.css';
// import { Link } from 'react-router-dom';

const Josh = ()=>{
    return(
        <div className='PreFlight'>
            <h1>J.C. - Architect Portfolio</h1>
            {/* <div>
                <label htmlFor='link'>Check out the repository here: </label>
                <Link id="link" to='ADD_REPO_HERE'><button className='btn'>PreFlight - GitHub</button></Link>
            </div> */}
            <div >
                <p className='p'>
                    This static web app will serve as a professional portfolio for my client. It will contain information about who the architect is, his education/background in the field, previous and current projects, specialty skills, and a contact page that will include a form to email him. 
                </p>
                <div>
                    <span>Current Stage: Proposal</span>
                </div>
            </div>
        </div>
    )
}

export default Josh;