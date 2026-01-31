import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          padding: '20px',
          background: '#696773',
          borderBottom: '2px solid #FED766'
        }}>
          <Link to="/" style={{ margin: '0 15px', color: '#FED766', textDecoration: 'none', fontSize: '18px' }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: '0 15px', color: '#FED766', textDecoration: 'none', fontSize: '18px' }}>
            About
          </Link>
          <Link to="/contact" style={{ margin: '0 15px', color: '#FED766', textDecoration: 'none', fontSize: '18px' }}>
            Contact
          </Link>
        </nav>

        <div className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
