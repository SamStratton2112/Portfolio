import './PreFlight.css';
import { Link } from 'react-router-dom';

const PreFlight = ()=>{
    return(
        <div className='PreFlight'>
            <h1>Capstone 2: PreFlight</h1>
            <div>
                <label htmlFor='link'>Check out the repository here: </label>
                <Link id="link" to='https://github.com/SamStratton2112/Capstone2.git'><button className='btn'>PreFlight - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                    This application is designed to assist travelers in anticipating and staying informed about potential flight delays. Users can access the latest weather forecasts for both departure and arrival destinations, derived from TAF reports utilized by pilots for departure preparations. These forecasts remain valid for up to 30 hours. Additionally, users have the option to receive hourly weather updates for their selected locations. For future trips, users can schedule notifications by specifying start and end dates and times.
                </p>
                <p>
                    Users have the option to register for notifications regarding non-weather-related delays. This information will be extracted from NOTAMs and TFRs issued by the FAA. These notices play a crucial role in flight planning, a mandatory requirement for all commercial flights. 
                </p>
                <p>
                    Depending on data availability I may include a feature that will alert users of airline policies pertaining to delays and cancelations.
                </p>
                <div>
                    <span>Current Stage: Proposal</span>
                </div>
            </div>
        </div>
    )
}

export default PreFlight;