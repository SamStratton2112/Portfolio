import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './CompleteProjects'
import StayWorldly from './StayWorldly';
import Resume from './Resume';
import CurrentProjects from './CurrentProjects';
import CompleteProjects from './CompleteProjects';

const AllRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route exact key="Home" path="/" element={<Home/>}/>
                <Route exact key="About" path="/about" element={<About/>}/>
                <Route exact key="Projects" path="/projects" element={<Projects/>}/>
                <Route exact key="StayWorldly" path="/projects/stayworldly" element={<StayWorldly/>}/>
                <Route path='/projects/complete' element={<CompleteProjects/>}/>
                <Route path='/projects/current' element={<CurrentProjects/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;