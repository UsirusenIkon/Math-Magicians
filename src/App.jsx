import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/Quote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <footer>
        <span>MathMagicians &copy;UsirusenIkon</span>
      </footer>
    </div>
  );
}

export default App;
