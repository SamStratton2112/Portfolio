import {Link} from 'react-router-dom'

const StayWorldly = ()=>{
    return(
        <div>
            <h1>Stay Worldly</h1>
            <div>
                <label htmlFor='link'>Check out Stay Worldy here: </label>
                <br/>
                <Link id="link" to='https://stay-worldly.onrender.com/'>Stay Worldly</Link>
            </div>
            <p>Stay Worldly is a platform designed for individuals to explore potential travel destinations. Upon registration or login, users can search for any city worldwide. Beyond providing information about the city and its attractions, users can also access information (as permitted by data) about the country and additional places to visit!</p>
            
            <image/>

        </div>
    )
}

export default StayWorldly