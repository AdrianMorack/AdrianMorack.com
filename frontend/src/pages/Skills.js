import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Skills() {
  // Hook for translations - switches between English and German
  const { t } = useTranslation();
  
  // Track which skills are currently expanded (opened)
  const [expandedSkills, setExpandedSkills] = useState([]);
  
  // Track if user is on mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // All my skills organized by category - employers can scan quickly
  const skillCategories = [
    {
      title: t('skills.titleProfessional'),
      skills: [
        { nameKey: 'skills.containerization', detailsKey: 'skills.containerizationDetails' },
        { nameKey: 'skills.aiIntegrations', detailsKey: 'skills.aiIntegrationsDetails' }
      ]
    },
    {
      title: t('skills.titleSoftware'),
      skills: [
        { nameKey: 'skills.programmingFundamentals', detailsKey: 'skills.programmingFundamentalsDetails' },
        { nameKey: 'skills.objectOriented', detailsKey: 'skills.objectOrientedDetails' },
        { nameKey: 'skills.dataStructures', detailsKey: 'skills.dataStructuresDetails' },
        { nameKey: 'skills.softwareDevelopment', detailsKey: 'skills.softwareDevelopmentDetails' },
        { nameKey: 'skills.softwareTools', detailsKey: 'skills.softwareToolsDetails' }
      ]
    },
    {
      title: t('skills.titleData'),
      skills: [
        { nameKey: 'skills.dataScience', detailsKey: 'skills.dataScienceDetails' },
        { nameKey: 'skills.databaseManagement', detailsKey: 'skills.databaseManagementDetails' },
        { nameKey: 'skills.discreteMath', detailsKey: 'skills.discreteMathDetails' }
      ]
    },
    {
      title: t('skills.titleSystems'),
      skills: [
        { nameKey: 'skills.operatingSystems', detailsKey: 'skills.operatingSystemsDetails' },
        { nameKey: 'skills.computerNetworks', detailsKey: 'skills.computerNetworksDetails' },
        { nameKey: 'skills.parallelComputing', detailsKey: 'skills.parallelComputingDetails' },
        { nameKey: 'skills.computerOrganization', detailsKey: 'skills.computerOrganizationDetails' }
      ]
    },
    {
      title: t('skills.titleSecurity'),
      skills: [
        { nameKey: 'skills.cybersecurity', detailsKey: 'skills.cybersecurityDetails' },
        { nameKey: 'skills.ethics', detailsKey: 'skills.ethicsDetails' }
      ]
    },
    {
      title: t('skills.titleSoftSkills'),
      skills: [
        { nameKey: 'skills.communication', detailsKey: 'skills.communicationDetails' },
        { nameKey: 'skills.teamwork', detailsKey: 'skills.teamworkDetails' }
      ]
    }
  ];

  // Handle clicking on a skill - open it if closed, close it if open
  const toggleSkill = (categoryIndex, skillIndex) => {
    const key = `${categoryIndex}-${skillIndex}`;
    setExpandedSkills(prev => 
      prev.includes(key) 
        ? prev.filter(i => i !== key) // Remove it if it's already open
        : [...prev, key] // Add it if it's closed
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #272932 0%, #1a1a24 100%)',
      padding: '20px'
    }}>
      {/* My name stays fixed on the left while everything else scrolls */}
      <div style={{ 
        position: 'fixed',
        fontSize: '3rem', 
        fontWeight: '700',
        top: '150px',
        left: '50px',
        width: '350px',
        color: '#FED766',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        lineHeight: '1.2'
      }}>
        Adrian Morack
      </div>

      {/* Main content area - scrollable */}
      <div style={{ 
        marginLeft: '500px', // Make room for the fixed name on the left
        padding: '20px',
        maxWidth: '700px'
      }}>
        {/* Page title */}
        <h2 style={{ 
          marginBottom: isMobile ? '20px' : '30px',
          fontSize: isMobile ? '1.5rem' : '2rem',
          color: '#FED766',
          borderBottom: '3px solid #009FB7',
          paddingBottom: '10px',
          fontWeight: '600'
        }}>
          {t('skills.title')}
        </h2>

        {/* Loop through each category and display all skills */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: '40px' }}>
            {/* Category header (like "Professional Experience") */}
            <h3 style={{
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              color: '#FED766',
              fontWeight: '600',
              marginBottom: isMobile ? '15px' : '20px',
              marginTop: categoryIndex === 0 ? '0' : (isMobile ? '20px' : '30px'),
              paddingBottom: '8px',
              borderBottom: '2px solid rgba(254, 215, 102, 0.3)'
            }}>
              {category.title}
            </h3>
            
            {/* Skills list for this category */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {category.skills.map((skill, skillIndex) => {
                const key = `${categoryIndex}-${skillIndex}`;
                return (
                  <li key={skillIndex} style={{ marginBottom: '15px' }}>
                    {/* Clickable skill button */}
                    <div 
                      onClick={() => toggleSkill(categoryIndex, skillIndex)}
                      style={{ 
                        cursor: 'pointer',
                        padding: isMobile ? '14px 16px' : '18px 20px',
                        // Change color if this skill is expanded
                        background: expandedSkills.includes(key) 
                          ? 'linear-gradient(135deg, #009FB7 0%, #0077b6 100%)'
                          : 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)',
                        borderRadius: isMobile ? '10px' : '12px',
                        marginBottom: expandedSkills.includes(key) ? (isMobile ? '10px' : '12px') : '0',
                        transition: 'all 0.3s ease', // Smooth animations
                        boxShadow: expandedSkills.includes(key) 
                          ? '0 6px 20px rgba(0,159,183,0.4)' 
                          : '0 3px 10px rgba(0,0,0,0.2)',
                        fontSize: isMobile ? '0.95rem' : '1.1rem',
                        fontWeight: '600',
                        transform: expandedSkills.includes(key) ? 'translateY(-2px)' : 'none'
                      }}
                      // Hover effect - lift up slightly when mouse is over it
                      onMouseEnter={(e) => {
                        if (!expandedSkills.includes(key)) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,159,183,0.3)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!expandedSkills.includes(key)) {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
                        }
                      }}
                    >
                      {/* Arrow icon - points down if open, right if closed */}
                      <span style={{ marginRight: '10px' }}>
                        {expandedSkills.includes(key) ? '▼' : '▶'}
                      </span>
                      {t(skill.nameKey)}
                    </div>
                    
                    {/* Show the details only if this skill is expanded */}
                    {expandedSkills.includes(key) && (
                      <div style={{
                        padding: isMobile ? '15px' : '20px',
                        background: 'linear-gradient(135deg, #696773 0%, #5a5a66 100%)',
                        borderRadius: isMobile ? '10px' : '12px',
                        marginBottom: isMobile ? '8px' : '10px',
                        boxShadow: '0 3px 15px rgba(0,0,0,0.3)',
                        lineHeight: '1.6',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        border: '1px solid rgba(254, 215, 102, 0.2)'
                      }}>
                        {t(skill.detailsKey)}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;