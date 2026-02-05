// Contact page component - form for visitors to send messages
// Submits data to backend API which sends email via Resend
// Shows success message after submission

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  // Hook for translations - switches between English and German
  const { t } = useTranslation();
  
  // Form state - tracks user input for name, email, and message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Status message (sending/success/error)
  const [submitted, setSubmitted] = useState(false); // Whether form was successfully submitted

  // Handle form submission - sends data to backend API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setStatus(t('contact.sending')); // Show "sending" message

    try { 
      // POST request to backend contact endpoint
      const response = await fetch('https://adrianmorack-com.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Success - show success message and reset form
        setStatus(t('contact.success'));
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Error response from server
        setStatus(t('contact.error'));
      }
    } catch (error) {
      // Network error or other exception
      setStatus(t('contact.error'));
    }
  }

  // Update form state when user types in input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Reusable style object for all form inputs
  const inputStyle = {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '2px solid #696773',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.05)',
    color: '#EFF1F3',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'calc(100vh - 64px)',
      padding: '3rem 2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '2rem',
        color: '#FED766',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>{t('contact.title')}</h1>
            {/* Conditional rendering - show form or success message */}      {!submitted ? (
        <form 
          onSubmit={handleSubmit} 
          style={{ 
            maxWidth: '90%', 
            width: '600px', 
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(105,103,115,0.2) 0%, rgba(90,90,102,0.2) 100%)',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              name="name"
              placeholder={t('contact.name')}
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
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <textarea
              name="message"
              placeholder={t('contact.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={inputStyle}
            />
          </div>
          
          {status && <p style={{ color: '#FED766', marginTop: '1rem' }}>{status}</p>}

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.2rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,159,183,0.3)',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,159,183,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,159,183,0.3)';
            }}
          >
            {t('contact.send')}
          </button>
        </form>
      ) : (
        <div style={{ 
          maxWidth: '90%', 
          width: '600px', 
          margin: '0 auto', 
          padding: '40px', 
          background: 'linear-gradient(135deg, #009FB7 0%, #007BA7 100%)', 
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,159,183,0.4)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: 'white',
            margin: 0
          }}>Thank you for your message! I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
