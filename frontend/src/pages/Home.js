import { useState } from 'react';

function Home() {
  const [apiResponse, setApiResponse] = useState(null);
  const [users, setUsers] = useState(null);

  const testAPI = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/test');
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error:', error);
      setApiResponse({ error: 'Failed to connect to API' });
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
      setUsers({ error: 'Failed to fetch users' });
    }
  };

  return (
    <div>
      <h1>Welcome to Adrian Morack's Website</h1>
      <p>This is your React frontend connected to your Express backend!</p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={testAPI} style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginRight: '10px'
        }}>
          Test Backend API
        </button>

        <button onClick={getUsers} style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Get Users
        </button>
      </div>

      {apiResponse && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#282c34',
          borderRadius: '8px',
          border: '1px solid #61dafb'
        }}>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}

      {users && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#282c34',
          borderRadius: '8px',
          border: '1px solid #61dafb'
        }}>
          <h3>Users:</h3>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;
