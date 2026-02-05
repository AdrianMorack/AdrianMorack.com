import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const githubURL = () => {
    window.open('https://github.com/AdrianMorack', '_blank');
  };

  const linkedinURL = () => {
    window.open('https://www.linkedin.com/in/adrian-morack-10501a1a9/', '_blank');
  };


  return (
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
        fontSize: '3.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#FED766',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        lineHeight: '1.2'
      }}>
        {t('home.welcome')}
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: '#009FB7',
        marginBottom: '3rem',
        fontWeight: '300'
      }}>
        {t('home.subtitle')}
      </p>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '2rem'
      }}>
        <button 
          onClick={githubURL}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 15px rgba(0,159,183,0.3)',
            transition: 'all 0.3s ease',
            fontWeight: '600'
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
            padding: '15px 30px',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #FED766 0%, #f5c942 100%)',
            border: 'none',
            borderRadius: '12px',
            color: '#272727',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 15px rgba(254,215,102,0.3)',
            transition: 'all 0.3s ease',
            fontWeight: '600'
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
