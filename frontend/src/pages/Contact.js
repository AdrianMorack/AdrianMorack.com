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

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #EFF1F3',
    boxSizing: 'border-box'
  };

  return (
    <div>
      <h1>Contact Me</h1>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '90%', width: '500px', margin: '20px auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
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
              style={inputStyle}
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
              style={inputStyle}
            />
          </div>
          
          <button type="submit">
            Send Message
          </button>
        </form>
      ) : (
        <div style={{ 
          maxWidth: '90%', 
          width: '500px', 
          margin: '20px auto', 
          padding: '20px', 
          background: '#EFF1F3', 
          borderRadius: '4px' 
        }}>
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
