import './Home.css';

function Home() {
  const skills = [
    'Python',
    'C++',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Firebase',
    'Cloud Functions',
    'Firestore',
    'RESTful APIs',
    'Expo',
    'Tailwind CSS',
    'Figma',
    'Git/GitHub',
    'Agile'
  ];

  const experiences = [
    {
      company: 'Swipeline TR',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Present',
      description: 'Engineered interactive frontend features using React and TypeScript, developed backend services with Node.js, Firebase Cloud Functions, and RESTful APIs.'
    },
    {
      company: 'Gamelab Istanbul',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Aug 2025',
      description: 'Developed custom UI components in C++ to enhance interactivity and graphics rendering, optimized AI-powered application functionalities.'
    },
    {
      company: 'Intertech',
      role: 'Software Engineering Intern',
      date: 'Aug 2025 - Sep 2025',
      description: 'Built and tested a mobile chatbot application using React Native, TypeScript, and Expo Go; designed UI/UX components in Figma.'
    }
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
        <h2 className="section-title">Experience Highlights</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="date">{exp.date}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
