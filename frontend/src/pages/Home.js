import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Home() {
  const [apiResponse, setApiResponse] = useState(null);
  const [users, setUsers] = useState(null);

  const githubURL = async () => {
    try {
      window.open('https://github.com/AdrianMorack', '_blank');
    } catch (error) {
      console.error('Error:', error);
      setUsers({ error: 'Failed to change URL' });
    }
  };

  const linkedinURL = async () => {
    try {
      window.open('https://www.linkedin.com/in/adrian-morack-10501a1a9/', '_blank');
    } catch (error) {
      console.error('Error:', error);
      setUsers({ error: 'Failed to change URL' });
    }
  };


  return (
    <div>
      <h1>Welcome to Adrian Morack's Website</h1>
      <p>PLACEHOLDER</p>
      
      <div>
        <button onClick={githubURL}>
          <FaGithub size={30}/>
        </button>
        <button onClick={linkedinURL}>
          <FaLinkedin size={30}/>
        </button>
      </div>
    </div>
  );
}

export default Home;
