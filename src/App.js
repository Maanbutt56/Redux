import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Project1 from './pages/Project1';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Project2 from './pages/Project2';
function App() {
  return (
    <div>
    <Router>
      <Routes>
      </Routes>
    </Router>
    {/* <Project1/> */}
    <Project2/>
    </div>
  );
}

export default App
