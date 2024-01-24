import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects'
import StayWorldly from './StayWorldly';

const AllRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route exact key="Home" path="/" element={<Home/>}/>
                <Route exact key="About" path="/about" element={<About/>}/>
                <Route exact key="Projects" path="/projects" element={<Projects/>}/>
                <Route exact key="StayWorldly" path="/projects/stayworldly" element={<StayWorldly/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;