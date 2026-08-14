import './Home.css';

function Home() {
  const skills = [
    'Python',
    'TypeScript',
    'JavaScript',
    'Swift',
    'Go',
    'C++',
    'SQL',
    'LLM APIs',
    'RAG',
    'Agentic Systems',
    'FastAPI',
    'Node.js',
    'PostgreSQL',
    'Firebase',
    'Docker',
    'Kubernetes',
    'React',
    'React Native',
    'SwiftUI',
    'Tailwind'
  ];

  const experiences = [
    {
      company: 'Vodafone',
      role: 'CBU Offer Intern',
      date: 'Jul 2026 - Present',
      description: 'Contributing to enterprise mobile and web product development within an Agile delivery team, building customer-facing features with industry-standard code review and CI/CD practices.'
    },
    {
      company: 'Feast',
      role: 'Backend & Microservice Developer / System Administrator',
      date: 'Mar 2026 - Present',
      description: 'Designing a microservice backend for a social restaurant-discovery platform: RESTful services in Go, orchestrated on a self-managed Kubernetes (k3s) cluster with monitoring for high availability.'
    },
    {
      company: 'Sentez',
      role: 'Mobile Developer',
      date: 'Oct 2025 - Present',
      description: 'Shipping cross-platform features across a shared React Native codebase and native iOS (Swift/SwiftUI); owner of the subscription module powering recurring SaaS revenue.'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Ceyda Akın</h1>
          <p className="hero-subtitle">AI / Software Engineer | Computer Engineering Student</p>
          <p className="hero-description">
            I build AI-powered products end to end — from custom LLM agents and retrieval
            systems to full-stack apps and production analytics. Experienced across
            Python/FastAPI backends, React/React Native frontends, and cloud infrastructure,
            with a track record of shipping to the App Store and running microservices on
            Kubernetes.
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
