// src/App.js
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
=======
import './App.css';
import Home from '../src/Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
>>>>>>> 246ce3167ff3fe159ac7a6374913265fc1ac5ce8
  );
}

export default App;
