import './Nonlocal.css';
import { Link } from 'react-router-dom';

const Nonlocal = () => {
    return (
        <div className='PreFlight'>
            <br/>
            <h1>Nonlocal Observer Ecommerce Platform</h1>
            <div>
                <label htmlFor='link'>Check out the repository here: </label>
                <Link id="link" to='https://github.com/SamStratton2112/non_local_observer'><button className='btn'>Nonlocal - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                    This dynamic web application will serve as a dedicated e-commerce platform for a Denver-based artist. It will enable users to browse and purchase artwork, register for push notifications on new collections or updates, and directly contact the artist for inquiries or commissions. The app will deliver a seamless shopping experience while fostering a direct connection between the artist and their audience.
                </p>
                <div>
                    <span>Current Stage: Proposal</span>
                </div>
            </div>
        </div>
    )
}

export default Nonlocal;