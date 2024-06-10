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
import { useCallback, useState } from 'react';

function App() {
  const [mode, setmode] = useState(true)
  const togglemode=()=>{
    setmode(!mode)
  }
  useCallback(
    ()=>{
      setmode(!mode)
    },
    [mode],
  )
  
    return (
    <div className={`${mode?"bg-light":"bg-dark"} pb-4`}>
      <div className={`weatherpage `}>
        <Router>
          <Navbar mode={mode} togglemode={togglemode} />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/forecast' element={<Forcast />}>
            </Route>
            <Route exact path='/history' element={<History />}>
            </Route>
            <Route exact path='/airquality' element={<Airquality />}>
            </Route>
          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default App;
