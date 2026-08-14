import './About.css';

function About() {
  const experiences = [
    {
      company: 'Vodafone',
      role: 'CBU Offer Intern',
      date: 'Jul 2026 - Present',
      description: 'Contribute to enterprise mobile and web product development within an Agile delivery team, building customer-facing features and applying industry-standard code review and CI/CD practices.'
    },
    {
      company: 'Feast',
      role: 'Backend & Microservice Developer / System Administrator',
      date: 'Mar 2026 - Present',
      description: 'Design and maintain a microservice backend for a social restaurant-discovery platform, building RESTful services in Go and orchestrating deployments on a self-managed Kubernetes (k3s) cluster with monitoring for high availability and horizontal scalability.'
    },
    {
      company: 'Sentez',
      role: 'Mobile Developer',
      date: 'Oct 2025 - Present',
      description: 'Ship cross-platform features across a shared React Native codebase and native iOS (Swift/SwiftUI); built an edit-section module with Node.js/Firebase Cloud Functions and owned the subscription module (in-app purchases, plan upgrades, billing) powering recurring SaaS revenue.'
    },
    {
      company: 'Intertech Information Technology and Marketing Inc.',
      role: 'Software Engineering Intern',
      date: 'Aug 2025 - Sep 2025',
      description: 'Built and shipped a mobile chatbot app in React Native/TypeScript/Expo; designed the UI/UX in Figma and integrated frontend features with backend services.'
    },
    {
      company: 'Gamelab Istanbul',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Aug 2025',
      description: 'Developed custom UI components in C++ for graphics rendering within an AI-powered desktop application, and optimized core functionality to improve performance and scalability.'
    },
    {
      company: 'GDG on Campus ITU',
      role: 'Organizer',
      date: 'Sep 2024 - Jun 2025',
      description: 'Organized 8+ technical workshops for 300+ students on Google Cloud, Firebase, and ML; grew the community to 250+ active members.'
    },
    {
      company: 'Young Guru Academy (YGA)',
      role: "Women Who Inspire Each Other'24",
      date: 'Mar 2024 - May 2024',
      description: 'Collaborated with peers and mentors in YGA initiatives, contributing to social impact projects and strengthening leadership, innovation, and community engagement skills.'
    },
    {
      company: 'Intertech Information Technology and Marketing Inc.',
      role: 'FirstTech Online Intern',
      date: 'Feb 2024 - Mar 2024',
      description: 'Applied Agile methodologies in digital transformation projects, collaborated with cross-functional teams, and delivered process improvements that strengthened technical expertise, innovation, and project management capabilities.'
    },
    {
      company: 'Turkish Entrepreneurship Foundation',
      role: 'Challenger',
      date: 'Oct 2023 - Jan 2024',
      description: 'Completed an intensive program in business development, innovation, and strategic planning, gaining hands-on mentorship and workshop experience that strengthened entrepreneurial mindset and advanced project management capabilities.'
    },
    {
      company: 'EESTEC',
      role: 'Corporate Relations Team Member',
      date: 'Sep 2023 - Jun 2024',
      description: 'Cultivated and managed corporate partnerships for EESTEC, securing sponsorships and collaborations that supported 5+ events, increased funding by 30%, and expanded the organization\'s industry network.'
    },
    {
      company: 'DenizBank',
      role: 'Denizaşırı Online Intern',
      date: 'Sep 2023 - Oct 2023',
      description: 'Gained access to diverse banking and personal development modules via a mobile platform. Earned certifications and enhanced essential business competencies through a dynamic, one-month digital training experience.'
    }
  ];

  const certificates = [
    { name: 'Akbank Machine Learning Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'Python Programming 101-401', org: 'Turkcell Gelecegi Yazanlar', year: '2024' },
    { name: 'AI Applications Programming with C++', org: 'Gamelab Istanbul', year: '2025' },
    { name: 'Certified Associate in Project Management (CAPM) Training', org: 'ITU Center for Excellence in Education', year: '2023' },
    { name: 'Akbank Python Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'SheCodes Basics + Basics Add-on', org: 'SheCodes', year: '2024' },
    { name: 'EY Strategy and Corporate Finance School', org: 'EY', year: '2024' }
  ];

  const technicalExpertise = [
    {
      category: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Swift', 'Go', 'C++', 'SQL']
    },
    {
      category: 'AI / ML',
      skills: ['LLM APIs', 'Prompt Engineering', 'RAG', 'Agentic Systems (ReAct)', 'Vector Search', 'ChromaDB']
    },
    {
      category: 'Backend & Cloud',
      skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'Firebase', 'Docker', 'Kubernetes (k3s)', 'REST']
    },
    {
      category: 'Observability & DevOps',
      skills: ['Prometheus', 'Grafana', 'CI/CD', 'Git/GitHub', 'Docker Compose', 'Sentry']
    },
    {
      category: 'Frontend & Mobile',
      skills: ['React', 'React Native', 'Expo', 'SwiftUI', 'Tailwind', 'Figma']
    },
    {
      category: 'Monetization & Analytics',
      skills: ['Adapty', 'RevenueCat', 'StoreKit', 'Mixpanel', 'Adjust', 'A/B Testing', 'App Store Deployment']
    }
  ];

  const researchInterests = [
    {
      area: 'Agentic AI & Retrieval',
      icon: '🧠',
      description: 'Building LLM agents that reason and act — custom ReAct loops, autonomous tool selection, and hybrid retrieval that combines dense vectors with BM25 and Reciprocal Rank Fusion for answers grounded in real sources.',
      topics: ['ReAct Agents', 'RAG', 'Vector Search', 'Source Attribution']
    },
    {
      area: 'Distributed Systems & Cloud',
      icon: '⚙️',
      description: 'Running services that stay up: Go microservices on a self-managed Kubernetes (k3s) cluster, containerized with Docker, instrumented with Prometheus and Grafana for high availability and horizontal scalability.',
      topics: ['Microservices', 'Kubernetes', 'Observability', 'System Design']
    },
    {
      area: 'Mobile Product Engineering',
      icon: '📱',
      description: 'Shipping cross-platform apps to the App Store with React Native, Expo, and native iOS — including subscription infrastructure, server-to-server renewal webhooks, and A/B-tested paywall funnels.',
      topics: ['React Native', 'SwiftUI', 'In-App Purchases', 'Growth Analytics']
    },
    {
      area: 'Privacy & Secure Engineering',
      icon: '🔐',
      description: 'Treating user data carefully by default — automatic PII sanitization before analytics dispatch, secure programming practices, and designing systems where sensitive information never leaves the boundary it should stay in.',
      topics: ['PII Sanitization', 'Secure Programming', 'Data Privacy', 'Analytics Hygiene']
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="about-intro">
          I am a Computer Engineering student and software engineer building AI-powered
          products end to end — from custom LLM agents and retrieval systems to full-stack
          apps and production analytics. I work across Python/FastAPI backends,
          React/React Native frontends, and cloud infrastructure, with a track record of
          shipping to the App Store and running microservices on Kubernetes.
        </p>
      </section>

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Istanbul Technical University</h3>
          <p className="degree">Bachelor of Science, Computer Engineering</p>
          <p className="gpa">GPA: 3.08 / 4.00</p>
          <p className="date">2022 - 2027</p>
          <p className="description">
            Relevant coursework: Data Structures, Analysis of Algorithms, OOP,
            Operating Systems, Database Systems, Secure Programming, Computer Architecture.
          </p>
        </div>
      </section>

      <section className="expertise-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="expertise-grid">
          {technicalExpertise.map((area, index) => (
            <div key={index} className="expertise-card">
              <h3>{area.category}</h3>
              <div className="expertise-skills">
                {area.skills.map((skill, i) => (
                  <span key={i} className="expertise-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="research-section">
        <h2 className="section-title">What I Focus On</h2>
        <p className="research-intro">
          I am passionate about applying technology to solve meaningful problems.
          These are the areas where I spend most of my time building, and where I want
          to go deeper.
        </p>
        <div className="research-grid">
          {researchInterests.map((interest, index) => (
            <div key={index} className="research-card">
              <span className="research-icon">{interest.icon}</span>
              <h3>{interest.area}</h3>
              <p className="research-description">{interest.description}</p>
              <div className="research-topics">
                {interest.topics.map((topic, i) => (
                  <span key={i} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="date">{exp.date}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="certificates-section">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h4>{cert.name}</h4>
              <p className="org">{cert.org}</p>
              <span className="year">{cert.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
