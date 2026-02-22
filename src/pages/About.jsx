import './About.css';

function About() {
  const experiences = [
    {
      company: 'Swipeline TR',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Present',
      description: 'Engineered interactive frontend features using React and TypeScript to improve user engagement, and developed backend services with Node.js, Firebase Cloud Functions, and RESTful APIs to enable scalable data processing and content delivery.'
    },
    {
      company: 'Gamelab Istanbul',
      role: 'Software Developer Intern',
      date: 'Jul 2025 - Aug 2025',
      description: 'Developed and integrated custom UI components in C++ to enhance interactivity and graphics rendering, and optimized core functionalities of an AI-powered application to improve performance, scalability, and user experience.'
    },
    {
      company: 'Intertech Information Technology and Marketing Inc.',
      role: 'Software Engineering Intern',
      date: 'Aug 2025 - Sep 2025',
      description: 'Built and tested a mobile chatbot application using React Native, TypeScript, and Expo Go; designed UI/UX components in Figma and integrated frontend features with backend services to deliver a seamless, scalable user experience.'
    },
    {
      company: 'Google Developer Student Clubs - ITU',
      role: 'GDG on Campus ITU Organizer',
      date: 'Sep 2024 - Jun 2025',
      description: 'Organized 8+ tech workshops and speaker events for 300+ students, growing GDG on Campus ITU to 250+ active members and fostering hands-on experience with Google technologies.'
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
    { name: 'Certified Associate in Project Management (CAPM) Training', org: 'ITU Center for Excellence in Education', year: '2023' },
    { name: 'Akbank Machine Learning Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'Python Programming 101-401', org: 'Turkcell Gelecegi Yazanlar', year: '2024' },
    { name: 'Akbank Python Bootcamp', org: 'Global AI Hub', year: '2024' },
    { name: 'SheCodes Basics + Basics Add-on', org: 'SheCodes', year: '2024' },
    { name: 'EY Strategy and Corporate Finance School', org: 'EY', year: '2024' },
    { name: 'AI Applications Programming with C++', org: 'Gamelab Istanbul', year: '2025' }
  ];

  const technicalExpertise = [
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Expo SDK', 'iOS Development', 'NativeWind', 'React Navigation', 'Offline-First Architecture']
    },
    {
      category: 'Web Development',
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion']
    },
    {
      category: 'Backend & Cloud',
      skills: ['Firebase', 'Cloud Functions', 'Firestore', 'Cloud Storage', 'Remote Config', 'Node.js', 'RESTful APIs']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['AI Integration', 'Computer Vision APIs', 'ML Model Deployment', 'Replicate API', 'Image Processing']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git/GitHub', 'Sentry', 'Firebase Analytics', 'CI/CD', 'Testing (Vitest, Playwright)', 'Agile']
    },
    {
      category: 'Monetization & Analytics',
      skills: ['RevenueCat', 'Stripe Integration', 'Subscription Management', 'User Analytics', 'A/B Testing']
    }
  ];

  const researchInterests = [
    {
      area: 'Machine Learning & AI',
      icon: '🧠',
      description: 'Developing intelligent systems that solve real-world problems in healthcare, finance, and education. Interested in deep learning architectures, computer vision, and making AI more accessible and impactful.',
      topics: ['Deep Learning', 'Computer Vision', 'Applied AI', 'NLP']
    },
    {
      area: 'Security & Privacy',
      icon: '🔐',
      description: 'Building secure systems and exploring privacy-preserving machine learning techniques. Focused on threat detection, anomaly detection algorithms, and developing robust security solutions.',
      topics: ['Threat Detection', 'Privacy-Preserving ML', 'Secure Systems', 'Anomaly Detection']
    },
    {
      area: 'Human-Computer Interaction',
      icon: '👥',
      description: 'Creating intuitive and accessible interactive systems. Interested in how users interact with AI-powered applications and designing experiences that bridge technology and human needs.',
      topics: ['UX Research', 'Accessibility', 'Interactive AI', 'User-Centered Design']
    },
    {
      area: 'Software Engineering',
      icon: '⚙️',
      description: 'Advancing software development practices through better tooling, testing methodologies, and architectural patterns. Interested in code quality, developer productivity, and scalable system design.',
      topics: ['Software Architecture', 'DevOps', 'Code Analysis', 'Scalable Systems']
    }
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
        <h2 className="section-title">Research Interests</h2>
        <p className="research-intro">
          I am passionate about applying technology to solve meaningful problems.
          My research interests span multiple areas where I aim to contribute to advancing
          the field while creating practical, real-world impact.
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
