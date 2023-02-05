import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import './index.css'
import Projects from './pages/Projects/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} basename={Home} />
        <Route path="/contact" element={<Contact/>} basename={Contact} />
        <Route path="/projects" element={<Projects/>} basename={Projects} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

