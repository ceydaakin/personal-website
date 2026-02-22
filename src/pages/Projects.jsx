import './Projects.css';

function Projects() {
  const featuredProjects = [
    {
      title: 'Netflix Clustering Analysis',
      description: 'K-Means clustering analysis of 8,807 Netflix shows from Kaggle dataset. Explored patterns in content genres, release years, and regional distributions using unsupervised machine learning techniques.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      github: 'https://github.com/ceydaakin/netflix-clustering',
      category: 'Machine Learning'
    },
    {
      title: 'Threat Detector',
      description: 'Security threat detection tool built with Python. Implements pattern recognition and anomaly detection algorithms to identify potential security threats in system logs and network traffic.',
      technologies: ['Python', 'Security', 'Pattern Recognition'],
      github: 'https://github.com/ceydaakin/threat_detector',
      category: 'Security'
    },
    {
      title: 'GlistEngine Darknet/YOLO Plugin',
      description: 'Integrated Darknet neural network framework and YOLO (You Only Look Once) object detection into GlistEngine game engine, enabling real-time AI-powered object detection in games.',
      technologies: ['C', 'C++', 'YOLO', 'Computer Vision', 'AI'],
      github: 'https://github.com/ceydaakin/gipDarknet',
      category: 'AI & Game Development'
    },
    {
      title: 'Connect Four AI Bot',
      description: 'Developed an AI opponent for Connect Four game using minimax algorithm with alpha-beta pruning. The bot evaluates game states and makes strategic decisions to challenge human players.',
      technologies: ['C', 'Algorithms', 'Game AI', 'Minimax'],
      github: 'https://github.com/ceydaakin/simple-bot-connect-four',
      category: 'Game AI'
    },
    {
      title: 'Exam Scheduling System',
      description: 'Automated exam scheduling system that optimizes room allocation and time slots while avoiding conflicts. Implements constraint satisfaction algorithms for efficient scheduling.',
      technologies: ['C', 'Algorithms', 'Optimization'],
      github: 'https://github.com/ceydaakin/exam-scheduling',
      category: 'Systems Programming'
    },
    {
      title: 'Process Management System',
      description: 'Low-level process management utility implementing core OS concepts including process scheduling, memory management, and inter-process communication.',
      technologies: ['C', 'Operating Systems', 'Systems Programming'],
      github: 'https://github.com/ceydaakin/process-management',
      category: 'Systems Programming'
    }
  ];

  const glistEnginePlugins = [
    { name: 'gipButton', description: 'Interactive button plugin component', github: 'https://github.com/ceydaakin/gipButton' },
    { name: 'gipEditImage', description: 'Image editing and manipulation plugin', github: 'https://github.com/ceydaakin/gipEditImage' },
    { name: 'gipGauge', description: 'UI gauge visualization component', github: 'https://github.com/ceydaakin/gipGauge' },
    { name: 'gipImage', description: 'Advanced image handling plugin', github: 'https://github.com/ceydaakin/gipImage' },
    { name: 'gipJson', description: 'JSON parsing using nlohmann::json', github: 'https://github.com/ceydaakin/gipJson' },
    { name: 'gipZstd', description: 'Zstandard compression library wrapper', github: 'https://github.com/ceydaakin/gipZstd' }
  ];

  const functionalProjects = [
    { name: "Conway's Game of Life", description: 'Cellular automaton simulation implementing the classic Game of Life rules', github: 'https://github.com/ceydaakin/Game-of-Life', lang: 'Haskell' },
    { name: 'Shortest Distance Algorithm', description: 'Path optimization and graph traversal algorithms', github: 'https://github.com/ceydaakin/shortest_distance', lang: 'Haskell' },
    { name: 'Hilbert Curve', description: 'Space-filling curve visualization and generation', github: 'https://github.com/ceydaakin/hilbert', lang: 'Haskell' },
    { name: 'Schelling Model', description: 'Agent-based simulation of segregation dynamics', github: 'https://github.com/ceydaakin/schelling', lang: 'Haskell' }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>Projects</h1>
        <p className="projects-intro">
          A collection of my academic and personal projects spanning machine learning,
          systems programming, game development, and functional programming.
        </p>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="plugin-projects">
        <h2 className="section-title">GlistEngine Plugins</h2>
        <p className="section-subtitle">
          Custom C++ plugins developed for the GlistEngine game development framework
        </p>
        <div className="plugins-grid">
          {glistEnginePlugins.map((plugin, index) => (
            <a
              key={index}
              href={plugin.github}
              target="_blank"
              rel="noopener noreferrer"
              className="plugin-card"
            >
              <h4>{plugin.name}</h4>
              <p>{plugin.description}</p>
              <span className="plugin-lang">C++</span>
            </a>
          ))}
        </div>
      </section>

      <section className="functional-projects">
        <h2 className="section-title">Functional Programming</h2>
        <p className="section-subtitle">
          Projects exploring functional programming paradigms with Haskell
        </p>
        <div className="functional-grid">
          {functionalProjects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="functional-card"
            >
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <span className="functional-lang">{project.lang}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="github-cta">
        <p>View more projects on my GitHub</p>
        <a
          href="https://github.com/ceydaakin"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit GitHub Profile
        </a>
      </section>
    </div>
  );
}

export default Projects;
