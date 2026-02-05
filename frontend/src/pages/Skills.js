import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  const [expandedSkills, setExpandedSkills] = useState([]);

  const skills = [
    { nameKey: 'skills.containerization', detailsKey: 'skills.containerizationDetails' },
    { nameKey: 'skills.aiIntegrations', detailsKey: 'skills.aiIntegrationsDetails' },
    { nameKey: 'skills.programmingFundamentals', detailsKey: 'skills.programmingFundamentalsDetails' },
    { nameKey: 'skills.objectOriented', detailsKey: 'skills.objectOrientedDetails' },
    { nameKey: 'skills.dataStructures', detailsKey: 'skills.dataStructuresDetails' },
    { nameKey: 'skills.softwareDevelopment', detailsKey: 'skills.softwareDevelopmentDetails' },
    { nameKey: 'skills.operatingSystems', detailsKey: 'skills.operatingSystemsDetails' },
    { nameKey: 'skills.databaseManagement', detailsKey: 'skills.databaseManagementDetails' },
    { nameKey: 'skills.computerOrganization', detailsKey: 'skills.computerOrganizationDetails' },
    { nameKey: 'skills.computerNetworks', detailsKey: 'skills.computerNetworksDetails' },
    { nameKey: 'skills.discreteMath', detailsKey: 'skills.discreteMathDetails' },
    { nameKey: 'skills.softwareTools', detailsKey: 'skills.softwareToolsDetails' },
    { nameKey: 'skills.cybersecurity', detailsKey: 'skills.cybersecurityDetails' },
    { nameKey: 'skills.dataScience', detailsKey: 'skills.dataScienceDetails' },
    { nameKey: 'skills.parallelComputing', detailsKey: 'skills.parallelComputingDetails' },
    { nameKey: 'skills.communication', detailsKey: 'skills.communicationDetails' },
    { nameKey: 'skills.teamwork', detailsKey: 'skills.teamworkDetails' },
    { nameKey: 'skills.ethics', detailsKey: 'skills.ethicsDetails' }
  ];

  const toggleSkill = (index) => {
    setExpandedSkills(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1e2e 0%, #272738 100%)',
      color: '#EFF1F3',
      paddingTop: '3rem',
      paddingBottom: '3rem'
    }}>
      {/* Fixed left side */}
      <div style={{ 
        position: 'fixed',
        fontSize: '3rem', 
        fontWeight: '700',
        top: '110px',
        left: '50px',
        width: '350px',
        color: '#FED766',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        lineHeight: '1.2'
      }}>
        Adrian Morack
        <div style={{ 
          fontSize: '1.2rem', 
          color: '#009FB7',
          fontWeight: '400',
          marginTop: '0.5rem'
        }}>
        </div>
      </div>

      {/* Scrollable right side */}
      <div style={{ 
        marginLeft: '500px',
        padding: '20px',
        maxWidth: '700px'
      }}>
        <h2 style={{ 
          marginBottom: '30px',
          fontSize: '2rem',
          color: '#FED766',
          borderBottom: '3px solid #009FB7',
          paddingBottom: '10px',
          fontWeight: '600'
        }}>
          {t('skills.title')}
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <div 
                onClick={() => toggleSkill(index)}
                style={{ 
                  cursor: 'pointer',
                  padding: '18px 20px',
                  background: expandedSkills.includes(index) 
                    ? 'linear-gradient(135deg, #009FB7 0%, #0077b6 100%)'
                    : 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)',
                  borderRadius: '12px',
                  marginBottom: expandedSkills.includes(index) ? '12px' : '0',
                  transition: 'all 0.3s ease',
                  boxShadow: expandedSkills.includes(index) 
                    ? '0 6px 20px rgba(0,159,183,0.4)' 
                    : '0 3px 10px rgba(0,0,0,0.2)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transform: expandedSkills.includes(index) ? 'translateY(-2px)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!expandedSkills.includes(index)) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,159,183,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!expandedSkills.includes(index)) {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
                  }
                }}
              >
                <span style={{ marginRight: '10px' }}>
                  {expandedSkills.includes(index) ? '▼' : '▶'}
                </span>
                {t(skill.nameKey)}
              </div>
              {expandedSkills.includes(index) && (
                <div style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, #696773 0%, #5a5a66 100%)',
                  borderRadius: '12px',
                  marginBottom: '10px',
                  boxShadow: '0 3px 15px rgba(0,0,0,0.3)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  border: '1px solid rgba(254, 215, 102, 0.2)'
                }}>
                  {t(skill.detailsKey)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;