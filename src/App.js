
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './pages/Shared/NavBar/NavBar.js';



function App() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(224,242,254)" }} className='h-screen'>
        <NavBar></NavBar>
        <Routes>


        </Routes>
      </div>

    </>



  );
}

export default App;