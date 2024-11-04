import {Routes, Route, Navigate} from 'react-router-dom';
import About from './About';
import Projects from './CompleteProjects'
import StayWorldly from './StayWorldly';
import Resume from './Resume';
import CurrentProjects from './CurrentProjects';
import CompleteProjects from './CompleteProjects';
import Certificates from './Certificates';
import Contact from './Contact';

const AllRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route exact key="Home" path="/" element={<About/>}/>
                <Route exact key="Projects" path="/projects" element={<Projects/>}/>
                <Route exact key="StayWorldly" path="/projects/stayworldly" element={<StayWorldly/>}/>
                <Route path='/projects/complete' element={<CompleteProjects/>}/>
                <Route path='/projects/current' element={<CurrentProjects/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/certifications' element={<Certificates/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;