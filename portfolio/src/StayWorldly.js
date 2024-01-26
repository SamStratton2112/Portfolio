import {Link} from 'react-router-dom'
import './StayWorldly.css'

const StayWorldly = ()=>{
    return(
        <div className='StayWorldly'>
            <h1>Stay Worldly</h1>
            <div>
                <label htmlFor='link'>Check out Stay Worldy here: </label>
                <Link id="link" to='https://stay-worldly.onrender.com/'><button className='btn'>Stay Worldly</button></Link>
                <Link className="link-sw" to='https://github.com/SamStratton2112/StayWorldly'><button className='btn'>Stay Worldly - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                    Stay Worldly is a platform designed for individuals to explore potential travel destinations. Upon registration or login, users can search for any city worldwide. Beyond providing information about the city, its attractions and a user's timezone difference from their employer(for digital nomads), users can also access information about the country and additional places to visit.
                </p>
                <p>Tech Stack: Python | Flask | Jinja, WTForms | SQLAlchemy | JavaScript | jQuery | CSS | Bootstrap 5 | HTML</p>
            </div>
        </div>
    )
}

export default StayWorldly;