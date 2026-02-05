// Main App component - handles routing and navigation
// Provides language switching between English and German
// Uses HashRouter for GitHub Pages compatibility

import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  // Hook for translations - provides t() function and i18n instance
  const { t, i18n } = useTranslation();
  
  // Track if user is on mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle between English and German
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };
  return (
    <Router>
      <div className="App">
        {/* Navigation bar with links and language toggle */}
        <nav style={{
          padding: isMobile ? '15px 15px' : '20px 40px',
          background: 'linear-gradient(135deg, #696773 0%, #5a5a66 100%)',
          borderBottom: '3px solid #FED766',
          position: 'relative',
          zIndex: 1000,
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: isMobile ? 'wrap' : 'nowrap'
        }}>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '2px' : '10px', 
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flex: isMobile ? '1' : 'unset'
          }}>
          <Link 
            to="/" 
            style={{ 
              margin: isMobile ? '0 2px' : '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '1.1rem',
              fontWeight: '600',
              padding: isMobile ? '8px 10px' : '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(254, 215, 102, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/skills" 
            style={{ 
              margin: isMobile ? '0 2px' : '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '1.1rem',
              fontWeight: '600',
              padding: isMobile ? '8px 10px' : '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(254, 215, 102, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('nav.skills')}
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              margin: isMobile ? '0 2px' : '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: isMobile ? '0.85rem' : '1.1rem',
              fontWeight: '600',
              padding: isMobile ? '8px 10px' : '10px 20px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(254, 215, 102, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('nav.contact')}
          </Link>
          </div>

          {/* Language toggle button - switches between EN and DE */}
          <button
            onClick={toggleLanguage}
            style={{
              background: 'rgba(254, 215, 102, 0.2)',
              color: '#FED766',
              border: '2px solid #FED766',
              borderRadius: '8px',
              padding: isMobile ? '8px 12px' : '10px 15px',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: isMobile ? '70px' : 'auto',
              marginLeft: isMobile ? 'auto' : '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FED766';
              e.currentTarget.style.color = '#696773';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(254, 215, 102, 0.2)';
              e.currentTarget.style.color = '#FED766';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}></span>
            {i18n.language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
          </button>
        </nav>

        {/* Route definitions for all pages */}
        <Routes>
          <Route path="/" element={<div className="App-header"><Home /></div>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<div className="App-header"><Contact /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
