
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './pages/Shared/NavBar/NavBar.js';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "rgb(224,242,254)" }} className='h-screen'> */}
      <NavBar></NavBar>
      <Contact />
      {/* <Routes> */}
      {/* <Route path='/contact' element={}></Route> */}
      {/* </Routes> */}
      {/* </div> */}

    </>



  );
}

export default App;