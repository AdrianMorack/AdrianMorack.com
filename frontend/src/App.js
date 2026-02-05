import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };
  return (
    <Router>
      <div className="App">
        <nav style={{
          padding: '20px 40px',
          background: 'linear-gradient(135deg, #696773 0%, #5a5a66 100%)',
          borderBottom: '3px solid #FED766',
          position: 'relative',
          zIndex: 1000,
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              margin: '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
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
              margin: '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
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
              margin: '0 10px', 
              color: '#FED766', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
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

          <button
            onClick={toggleLanguage}
            style={{
              background: 'rgba(254, 215, 102, 0.2)',
              color: '#FED766',
              border: '2px solid #FED766',
              borderRadius: '8px',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
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
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            {i18n.language === 'en' ? 'DE' : 'EN'}
          </button>
        </nav>

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
