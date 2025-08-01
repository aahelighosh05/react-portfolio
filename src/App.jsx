import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="hp-container">
              <Home />
            </div>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;