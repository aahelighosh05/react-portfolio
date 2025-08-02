import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="hp-container"><Home /></div>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
