import { useState } from 'react';

function About() {
  const [expandedSkills, setExpandedSkills] = useState([]);

  const skills = [
    { name: 'Containerization', details: 'Worked for a company in containerizing all aspects of an AI including, the AI model, database, frontend, and backend using Docker to ensure scalability and ease of deployment across various environments.' },
    { name: 'AI Integrations', details: 'Worked for a company to implement an AI chatbot into their webhook system, enhancing customer interaction and support efficiency through intelligent automation.' },
    { name: 'Programming Fundamentals', details: 'Proficient in foundational programming concepts including variables, control structures, functions, and basic data types used in multiple languages.' },
    { name: 'Object-Oriented Design', details: 'Skilled in object-oriented programming and design principles for writing modular and maintainable code.' },
    { name: 'Data Structures & Algorithms', details: 'Expertise in core data structures (lists, trees, graphs, hash tables) and algorithmic problem solving including analysis of complexity.' },
    { name: 'Software Development Lifecycle', details: 'Understanding and application of software engineering principles, including design, implementation, testing, and maintenance. This also includes creating CI/CD pipelines, automated testing, and deployment strategies.' },
    { name: 'Operating Systems Concepts', details: 'Knowledge of operating system principles such as processes, threads, scheduling, memory management, and file systems.' },
    { name: 'Database Management', details: 'Ability to design, implement, and query relational databases and understand data persistence using SQL and related tools.' },
    { name: 'Computer Organization & Architecture', details: 'Understanding of the structure and functioning of computer hardware and low-level software interaction.' },
    { name: 'Computer Networks', details: 'Familiarity with networking principles, protocols, and communication mechanisms in distributed systems.' },
    { name: 'Discrete Mathematics & Formal Reasoning', details: 'Mastery of mathematical foundations including logic, discrete structures, proofs, and reasoning essential for CS theory.' },
    { name: 'Software Tools & Practices', details: 'Practical skills in development environments, version control, debugging, and industry-relevant tooling.' },
    { name: 'Cybersecurity Fundamentals', details: 'Introductory skills in securing systems and understanding privacy, threats, and protective measures.' },
    { name: 'Data Science & AI Basics', details: 'Fundamentals in data analysis, machine learning, and data-driven computing for intelligent systems.' },
    { name: 'Parallel & Distributed Computing', details: 'Experience with parallel programming and distributed systems for high-performance applications.' },
    { name: 'Professional Communication', details: 'Effective written and oral communication skills for technical and collaborative computing contexts.' },
    { name: 'Teamwork & Leadership', details: 'Ability to work in teams, lead small groups, and participate in collaborative development projects.' },
    { name: 'Ethical & Legal Computing Practice', details: 'Understanding of ethical, legal, and societal implications of computing decisions and professional responsibilities.' }

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
          Skills & Expertise
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
                {skill.name}
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
                  {skill.details}
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