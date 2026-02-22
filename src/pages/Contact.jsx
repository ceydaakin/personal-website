import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'akince22@itu.edu.tr',
      link: 'mailto:akince22@itu.edu.tr'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/ceydaakin',
      link: 'https://www.linkedin.com/in/ceydaakin/'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/ceydaakin',
      link: 'https://github.com/ceydaakin'
    }
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact</h1>
        <p className="contact-intro">
          Feel free to reach out to me by filling out the form below or
          through my social media accounts.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="info-card"
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send a Message</h2>
            {submitted && (
              <div className="success-message">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
