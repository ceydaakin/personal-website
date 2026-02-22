import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Ceyda Akın. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/ceydaakin/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ceydaakin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="mailto:akince22@itu.edu.tr"
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
