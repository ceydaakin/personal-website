import './About.css';

function About() {
  const experiences = [
    {
      company: 'Swipeline TR',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Present',
      description: 'Engineered interactive frontend features using React and TypeScript to improve user engagement, and developed backend services with Node.js, Firebase Cloud Functions, and RESTful APIs.'
    },
    {
      company: 'Gamelab Istanbul',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Aug 2025',
      description: 'Developed and integrated custom UI components in C++ to enhance interactivity and graphics rendering, and optimized core functionalities of an AI-powered application.'
    },
    {
      company: 'Intertech Information Technology and Marketing Inc.',
      role: 'Software Engineering Intern',
      date: 'Aug 2025 - Sep 2025',
      description: 'Built and tested a mobile chatbot application using React Native, TypeScript, and Expo Go; designed UI/UX components in Figma and integrated frontend features with backend services.'
    },
    {
      company: 'Google Developer Student Clubs - ITU',
      role: 'GDG on Campus ITU Organizer',
      date: 'Sep 2024 - Jun 2025',
      description: 'Organized 8+ tech workshops and speaker events for 300+ students, growing GDG on Campus ITU to 250+ active members and fostering hands-on experience with Google technologies.'
    },
    {
      company: 'Young Guru Academy (YGA)',
      role: 'Women Who Inspire Each Other\'24',
      date: 'Mar 2024 - May 2024',
      description: 'Collaborated with peers and mentors in YGA initiatives, contributing to social impact projects and strengthening leadership, innovation, and community engagement skills.'
    },
    {
      company: 'Intertech Information Technology and Marketing Inc.',
      role: 'FirstTech Online Intern',
      date: 'Feb 2024 - Mar 2024',
      description: 'Applied Agile methodologies in digital transformation projects, collaborated with cross-functional teams, and delivered process improvements.'
    },
    {
      company: 'Turkish Entrepreneurship Foundation',
      role: 'Challenger',
      date: 'Oct 2023 - Jan 2024',
      description: 'Completed an intensive program in business development, innovation, and strategic planning, gaining hands-on mentorship and workshop experience.'
    },
    {
      company: 'EESTEC',
      role: 'Corporate Relations Team Member',
      date: 'Sep 2023 - Jun 2024',
      description: 'Cultivated and managed corporate partnerships for EESTEC, securing sponsorships and collaborations that supported 5+ events and increased funding by 30%.'
    }
  ];

  const certificates = [
    { name: 'Certified Associate in Project Management (CAPM) Training', org: 'ITU Center for Excellence in Education', year: '2023' },
    { name: 'Akbank Machine Learning Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'Python Programming 101-401', org: 'Turkcell Gelecegi Yazanlar', year: '2024' },
    { name: 'Akbank Python Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'SheCodes Basics + Basics Add-on', org: 'SheCodes', year: '2024' },
    { name: 'EY Strategy and Corporate Finance School', org: 'EY', year: '2024' },
    { name: 'AI Applications Programming with C++', org: 'Gamelab Istanbul', year: '2025' }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="about-intro">
          I am a motivated technology professional with hands-on experience in Python, C++,
          frontend and backend development, AI-driven applications, and mobile app solutions.
          Recognized for strong teamwork, innovation, and the ability to bridge technical
          expertise with impactful project outcomes.
        </p>
      </section>

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Istanbul Technical University</h3>
          <p className="degree">Bachelor of Science, Computer Engineering</p>
          <p className="gpa">GPA: 3.12</p>
          <p className="date">2022 - 2027</p>
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
