import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginTop: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
          
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            background: '#61dafb',
            border: 'none',
            borderRadius: '4px'
          }}>
            Send Message
          </button>
        </form>
      ) : (
        <div style={{ marginTop: '20px', padding: '20px', background: '#d4edda', borderRadius: '4px' }}>
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
