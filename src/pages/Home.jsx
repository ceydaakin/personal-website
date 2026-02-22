import './Home.css';

function Home() {
  const skills = [
    'Python',
    'C++',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Firebase',
    'RESTful APIs',
    'Figma',
    'Git/GitHub',
    'Agile'
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Ceyda Akın</h1>
          <p className="hero-subtitle">Software Developer | Computer Engineering Student</p>
          <p className="hero-description">
            I'm a Computer Engineering student at Istanbul Technical University with
            hands-on experience in Python, C++, frontend and backend development,
            AI-driven applications, and mobile app solutions.
          </p>
          <div className="hero-buttons">
            <a href="/about" className="btn btn-primary">About Me</a>
            <a href="/contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="experience-preview">
        <h2 className="section-title">Experience Overview</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <h3>Swipeline TR</h3>
            <p className="role">Software Developer Intern</p>
            <p className="date">Jul 2025 - Present</p>
          </div>
          <div className="experience-card">
            <h3>Gamelab Istanbul</h3>
            <p className="role">Software Developer Intern</p>
            <p className="date">Jul 2025 - Aug 2025</p>
          </div>
          <div className="experience-card">
            <h3>Intertech</h3>
            <p className="role">Software Engineering Intern</p>
            <p className="date">Aug 2025 - Sep 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
