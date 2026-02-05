// Home page component - landing page with welcome message and social links
// Features centered layout with GitHub and LinkedIn profile buttons

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Home() {
  // Hook for translations - switches between English and German
  const { t } = useTranslation();
  
  // Track if user is on mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Open GitHub profile in new tab
  const githubURL = () => {
    window.open('https://github.com/AdrianMorack', '_blank');
  };

  // Open LinkedIn profile in new tab
  const linkedinURL = () => {
    window.open('https://www.linkedin.com/in/adrian-morack-10501a1a9/', '_blank');
  };


  return (
    // Centered container for welcome message and social buttons
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 64px)',
      textAlign: 'center',
      padding: '2rem',
      marginTop: '-10vh'
    }}>
      <h1 style={{
        fontSize: isMobile ? '1.8rem' : '3.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#FED766',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        lineHeight: '1.2',
        padding: isMobile ? '0 10px' : '0'
      }}>
        {t('home.welcome')}
      </h1>
      <p style={{
        fontSize: isMobile ? '1rem' : '1.5rem',
        color: '#009FB7',
        marginBottom: isMobile ? '2rem' : '3rem',
        fontWeight: '300',
        padding: isMobile ? '0 10px' : '0'
      }}>
        {t('home.subtitle')}
      </p>
      
      {/* Social media buttons - GitHub and LinkedIn */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '15px' : '20px',
        marginTop: '2rem',
        width: isMobile ? '100%' : 'auto',
        padding: isMobile ? '0 20px' : '0',
        boxSizing: 'border-box'
      }}>
        <button 
          onClick={githubURL}
          style={{
            padding: isMobile ? '12px 20px' : '15px 30px',
            fontSize: isMobile ? '1rem' : '1.1rem',
            background: 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 4px 15px rgba(0,159,183,0.3)',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            width: isMobile ? '100%' : 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,159,183,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,159,183,0.3)';
          }}
        >
          <FaGithub size={30}/>
          {t('home.github')}
        </button>
        <button 
          onClick={linkedinURL}
          style={{
            padding: isMobile ? '12px 20px' : '15px 30px',
            fontSize: isMobile ? '1rem' : '1.1rem',
            background: 'linear-gradient(135deg, #FED766 0%, #f5c942 100%)',
            border: 'none',
            borderRadius: '12px',
            color: '#272727',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 4px 15px rgba(254,215,102,0.3)',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            width: isMobile ? '100%' : 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(254,215,102,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(254,215,102,0.3)';
          }}
        >
          <FaLinkedin size={30}/>
          {t('home.linkedin')}
        </button>
      </div>
    </div>
  );
}

export default Home;
