import './App.css';
import NavBar from './NavBar'
import AllRoutes from './AllRoutes';
import {BrowserRouter} from 'react-router-dom';
import background from './static/background.jpg';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ 
      backgroundImage: `url(${background})` 
    }}>
        <NavBar/>
        <AllRoutes/>
        <span style={{position: 'absolute', marginLeft: '300px', marginTop: '30%'}}><a href="https://www.freepik.com/free-vector/abstract-light-blue-mesh-background_1534713.htm#query=light%20green%20tech%20abstract&position=21&from_view=search&track=ais&uuid=653c9834-c0f5-43bc-803a-cd95061ac674">Image by GarryKillian</a> on Freepik</span>
      </div>
    </BrowserRouter>
  );
}

export default App;
