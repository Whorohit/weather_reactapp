import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home.js'
import Forcast from './components/Forcast'
import History from './components/history'
import Airquality from './components/Airquality'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className='weatherpage '>
      <Router>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/forecast' element={<Forcast/>}>
    </Route>
    <Route exact path='/history' element={<History/>}>
    </Route>
    <Route exact path='/airquality' element={<Airquality/>}>
    </Route>
   </Routes>
   </Router>
      
    </div>
  );
}

export default App;
