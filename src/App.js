import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages';
import Menu from './pages/menu';
import Directions from './pages/directions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <Router>
      {/* <SideMenu /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="menu" element={<Menu />} />      
        <Route path="directions" element={<Directions />} />      
      </Routes>
    </Router>
  );
}

export default App;
