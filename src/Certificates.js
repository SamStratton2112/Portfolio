import './Certificates.css'
import springboard from './static/springboard.jpg'

const Certificates = () =>{
    return(
        <div className="Certificates">
            <div className="springboard">
                <img className="certImg" src={springboard} alt='Springboard Certificate'/>
            </div>
        </div>
    )
}

export default Certificates;