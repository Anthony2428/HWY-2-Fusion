import React from 'react';
import './App.css';
import Home from './pages';
import Menu from './pages/menu';
import MenuItem from './components/MenuItem';
import Directions from './pages/directions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="menu" element={<Menu />}>
            <Route path="menu/*" element={<MenuItem />} />
          </Route>
          <Route path="directions" element={<Directions />} />      
        </Routes>
    </Router>
  );
}

export default App;
