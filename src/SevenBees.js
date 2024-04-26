import {Link} from 'react-router-dom'
import './SevenBees.css'

const SevenBees = ()=>{
    return(
        <div className='SevenBees'>
            <h1>SevenBees</h1>
            <div>
                <label htmlFor='link'>Check out SevenBees here: </label>
                <Link id="link" to='https://sevenbees.onrender.com/'><button className='btn'>SevenBees</button></Link>
                <Link className="link-sw" to='https://github.com/SamStratton2112/SevenBees.git'><button className='btn'>StevenBees Frontend - GitHub</button></Link>
                <Link className="link-sw" to='https://github.com/SamStratton2112/SevenBeesBackend.git'><button className='btn'>StevenBees Backend - GitHub</button></Link>
            </div>
            <div >
                <p className='p'>
                Seven Bees Honey - The Hive of E-commerce! This PERN stack web application empowers users to seamlessly browse the Seven Bees honey collection and learn detailed information about each honey and its properties. Users can conveniently purchase honey sets directly through this secure online store.
                </p>
                <p>Tech Stack: React.js | Node.js | Express | PostgreSQL | CSS | Bootstrap 5 | HTML</p>
            </div>
        </div>
    );
};

export default SevenBees;