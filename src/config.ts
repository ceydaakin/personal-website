// Site content. Every fact here comes from Ceyda's master CV (cv-tailor/cv.yaml) or her public GitHub repos.
export const siteConfig = {
  name: "Ceyda Akın",
  title: "Software Engineer · Backend, Infrastructure & AI Systems",
  description:
    "Ceyda Akın, software engineer: Go microservices on Kubernetes, AI agent platform integrations, data pipelines and five live iOS apps.",
  siteUrl: "https://ceydaakin.vercel.app",
  accentColor: "#c2410c",
  social: {
    email: "ceydaakin04@gmail.com",
    linkedin: "https://linkedin.com/in/ceydaakin",
    github: "https://github.com/ceydaakin",
  },
  aboutMe:
    "I'm a Computer Engineering student at Istanbul Technical University with over a year of professional experience across three roles. I design and operate a Go microservice backend on a self-managed Kubernetes cluster, build the integrations layer of an AI agent platform, and ship data pipelines with monitoring and alerting built in. I like owning a problem end to end, failure cases included: retries with backoff, alerts that fire only when an outage is real, and queries that are refused before they scan a whole collection.",
  skills: [
    "Go",
    "C++",
    "Python",
    "TypeScript",
    "SQL",
    "Swift",
    "Kubernetes (k3s)",
    "Docker",
    "REST APIs",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Apache Airflow",
    "Prometheus",
    "Grafana",
    "CI/CD",
    "React",
    "React Native",
    "LLM agents",
    "RAG",
    "MCP",
  ],
  projects: [
    {
      name: "Agentic RAG",
      description:
        "An AI agent built from scratch with a custom ReAct loop (no LangChain) that chooses among six tools, retrieves with dense vectors plus BM25 merged by Reciprocal Rank Fusion, streams answers over SSE, and cites a source for every answer.",
      link: "https://github.com/ceydaakin/agentic-rag",
      skills: ["Python", "FastAPI", "ChromaDB", "LLM APIs"],
    },
    {
      name: "Concurrent Web Crawler & Search Engine",
      description:
        "A concurrent web crawler and real-time search engine written in Go, built for ITU's BLG483E course.",
      link: "https://github.com/ceydaakin/web-crawler",
      skills: ["Go", "Concurrency"],
    },
    {
      name: "Competitor Analysis Pipeline",
      description:
        "AImpact Hackathon, Yataş Group Challenge. In a three-person team, replaced a manual two-day monthly Excel workflow with Airflow-scheduled scrapers tracking 180+ products from three rival brands, Gemini attribute extraction, TimescaleDB storage, weekly PDF/Excel reports and Prometheus/Grafana monitoring.",
      skills: ["Python", "Airflow", "PostgreSQL/TimescaleDB", "Grafana"],
    },
    {
      name: "Aletheia",
      description:
        "A risk-controlled RAG gateway: sentence-level NLI verification plus distribution-free risk control (Learn-then-Test) bounds the unsupported-claim rate, and the gateway abstains when the bound can't be met.",
      link: "https://github.com/ceydaakin/Aletheia",
      skills: ["Python", "RAG", "NLI"],
    },
    {
      name: "Five Live iOS Apps",
      description:
        "FamilyCode, SIGMA, Stamp Appraisal, Banknote ID and Retro ID ship from one shared React Native / Swift template: vision-LLM inference, subscriptions with server-to-server renewal webhooks, and one event dispatcher fanning out to Mixpanel, Firebase and Adjust.",
      skills: ["React Native", "Swift", "RevenueCat", "Adapty"],
    },
    {
      name: "ASL Realtime",
      description:
        "Real-time American Sign Language recognition from hand and pose landmarks with a temporal transformer, running on-device.",
      link: "https://github.com/ceydaakin/asl-realtime",
      skills: ["Python", "Transformers", "Computer Vision"],
    },
  ],
  experience: [
    {
      company: "Vodafone, Consumer & Business Unit",
      title: "Software Engineering Intern",
      dateRange: "Jul 2026 – Present",
      bullets: [
        "Build customer-facing features for enterprise mobile and web products inside an Agile delivery team.",
        "Work through peer code review and CI/CD release pipelines at enterprise scale.",
      ],
    },
    {
      company: "Feast (Remote)",
      title: "Backend & Infrastructure Engineer",
      dateRange: "Mar 2026 – Present",
      bullets: [
        "Design and operate the Go microservice backend for a social restaurant-discovery platform, serving the mobile client over REST.",
        "Own deployment and reliability on a self-managed Kubernetes (k3s) cluster: monitoring, horizontal scaling and releases, without a dedicated ops team.",
      ],
    },
    {
      company: "Sentez (Remote)",
      title: "Mobile & Backend Developer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Connected a vendor's MCP server to an AI agent platform as agent-callable tools through OAuth with dynamic client registration; every write goes through human approval.",
        "Replaced the Slack SDK's reconnect with a supervised one (2–60 s backoff, one alert only after 30 minutes down) after refused tokens crashed the process.",
        "Shipped a read-only MongoDB query tool for operators with a server-owned tenant filter and field allowlist; every query is explain-checked and refused on a collection scan.",
        "Made Gmail and Outlook sends render the agent's Markdown as HTML by reading each action's JSON schema; an LLM eval took formatted mails from 0/10 to 10/10.",
        "Own the subscription and billing module of a live iOS product (StoreKit, plan upgrades, renewal handling) on React Native and Swift/SwiftUI.",
      ],
    },
    {
      company: "Intertech",
      title: "Software Engineering Intern",
      dateRange: "Aug 2025 – Sep 2025",
      bullets: [
        "Built and shipped a mobile chatbot in React Native, TypeScript and Expo, from Figma UI/UX design through backend integration.",
      ],
    },
    {
      company: "Gamelab Istanbul",
      title: "Software Developer Intern",
      dateRange: "Jul 2025 – Aug 2025",
      bullets: [
        "Developed custom C++ UI components for graphics rendering in an AI desktop application, optimizing core rendering paths.",
      ],
    },
    {
      company: "GDG on Campus ITU",
      title: "Organizer & Community Lead",
      dateRange: "Sep 2024 – Jun 2025",
      bullets: [
        "Ran 8+ workshops on Google Cloud, Firebase and ML for 300+ students, growing the community to 250+ active members.",
      ],
    },
  ],
  education: [
    {
      school: "Istanbul Technical University",
      degree: "B.Sc. Computer Engineering",
      dateRange: "2022 – 2027 (expected)",
      achievements: ["GPA 3.08 / 4.00"],
    },
    {
      school: "Global AI Hub, Turkcell, Gamelab Istanbul",
      degree: "Certifications",
      dateRange: "2024 – 2025",
      achievements: [
        "Akbank Machine Learning Bootcamp, Global AI Hub (2024)",
        "Python Programming 101–401, Turkcell (2024)",
        "AI Programming with C++, Gamelab Istanbul (2025)",
      ],
    },
  ],
};
