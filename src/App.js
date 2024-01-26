import './App.css';
import NavBar from './NavBar'
import AllRoutes from './AllRoutes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <NavBar/>
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
