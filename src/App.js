import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faLinux,
  faDocker,
  faGolang,
  faGithub,
  faLinkedin,
  faReact,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCalendar,
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// Luffy image is in public folder, referenced via PUBLIC_URL
const theoLuffy = `${process.env.PUBLIC_URL}/theoLuffy.png`;

// Typewriter Effect Component
const DynamicTitle = ({ titles, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    let typingTimeout;

    if (!isDeleting && currentText === titles[currentIndex]) {
      typingTimeout = setTimeout(() => setIsDeleting(true), interval);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % titles.length);
    } else {
      typingTimeout = setTimeout(() => {
        setCurrentText((prev) => {
          const baseText = titles[currentIndex];
          return isDeleting
            ? baseText.slice(0, prev.length - 1)
            : baseText.slice(0, prev.length + 1);
        });
      }, typeSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, titles, currentIndex, interval]);

  return (
    <h2 className="dynamic-title">
      {currentText}
      <span className="cursor">|</span>
    </h2>
  );
};

// Navigation with Thousand Sunny Logo
const Navigation = () => (
  <nav>
    <a href="#about" className="nav-logo">
      <img
        src={`${process.env.PUBLIC_URL}/thousandSunny.png`}
        alt="Thousand Sunny"
        className="sunny-logo"
      />
      <span className="nav-brand">Théo</span>
    </a>
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#voyage">Voyage</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

// Hero / About Me Section
const AboutMe = () => (
  <section id="about" data-aos="fade-up">
    <div className="hero-content">
      <div className="hero-text">
        <p className="greeting">Yo, I'm</p>
        <h1 className="hero-name">
          <span className="accent">T</span>héo Xavier Lopes
        </h1>
        <DynamicTitle
          titles={[
            "Backend Developer",
            "DevOps Enthusiast",
          ]}
          interval={3000}
        />
        <p className="hero-description">
          Backend developer with proven experience building scalable,
          high-performance systems using Python, Go, and Django. Passionate about
          API architecture, automation, CI/CD, and DevOps culture. Currently
          pursuing a degree in Information Systems at{" "}
          <a href="https://www.pucminas.br/" className="inline-link">
            PUC Minas
          </a>. Outside of code, I'm into anime (One Piece is the GOAT), video games,
          and pretty much anything geek culture related.
        </p>
        <div className="hero-badges">
          <span className="badge">Python</span>
          <span className="badge">Go</span>
          <span className="badge">Django</span>
          <span className="badge">Docker</span>
          <span className="badge">CI/CD</span>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
          <a href="#voyage" className="btn btn-outline">
            My Journey
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-frame">
          <img src={theoLuffy} alt="Théo as Luffy" />
        </div>
      </div>
    </div>
  </section>
);

// Skills Section
const Skills = () => {
  const coreSkills = [
    { name: "Python", icon: faPython },
    { name: "Go", icon: faGolang },
    { name: "React", icon: faReact },
    { name: "Docker", icon: faDocker },
    { name: "Linux", icon: faLinux },
    { name: "GitHub", icon: faGithub },
    { name: "GCP", icon: faGoogle },
  ];

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "Go (Golang)",
        "Django",
        "FastAPI",
        "React",
        "JavaScript",
        "TypeScript",
        "C++",
        "Django REST Framework",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "Podman",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "Google Cloud Platform",
        "Sentry",
        "TeamCity",
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        "Git",
        "GitLab",
        "Perforce",
        "Redis",
        "REST APIs",
        "Microservices",
        "Unit Testing",
        "Integration Testing",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <section id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <div className="skills-icons-row">
        {coreSkills.map((skill) => (
          <div key={skill.name} className="skill-icon-card" data-aos="zoom-in">
            <FontAwesomeIcon icon={skill.icon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="skill-categories">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-category" data-aos="fade-up">
            <h3>{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience / Voyage Section
const experiences = [
  {
    company: "AmoPromo",
    role: "Fullstack Developer",
    period: "Nov 2025 – Present",
    icon: faBriefcase,
    description:
      "Fullstack development using Python, Django, Go, and React in scalable applications. Focus on performance, usability, and software engineering best practices.",
    highlight: "Refactored insurance provider integrations, eliminating manual emissions",
    tech: ["Python", "Django", "Go", "React"],
  },
  {
    company: "Cabtec by Kyubi",
    role: "Backend Developer",
    period: "Jan 2025 – Oct 2025",
    icon: faBriefcase,
    description:
      "Backend development using Python and FastAPI integrated with React apps. CI/CD implementation with GitHub Actions and management of Linux servers in cloud environments.",
    highlight:
      "Led end-to-end TOTVS integration & automated deployment pipelines",
    tech: ["Python", "FastAPI", "GitHub Actions", "Linux"],
  },
  {
    company: "Framestore — London",
    role: "Unreal Engine Developer Intern",
    period: "Jul 2024 – Sep 2024",
    icon: faGlobe,
    description:
      "Development of features in Unreal Engine 5 using C++ for high-complexity projects. Integration with Perforce and TeamCity for build automation.",
    highlight: "Delivered fully automated build pipeline for the Unreal ecosystem",
    tech: ["Unreal Engine 5", "C++", "Perforce", "TeamCity"],
  },
  {
    company: "PCX Tecnologia",
    role: "Software Developer",
    period: "Aug 2022 – Dec 2024",
    icon: faBriefcase,
    description:
      "Backend and frontend development using Python and JavaScript. System integrations and SQL query optimization for performance improvements.",
    highlight:
      "Reduced system response time by 50%, impacting 5,000+ users",
    tech: ["Python", "JavaScript", "SQL", "C#"],
  },
];

const Voyage = () => (
  <section id="voyage" data-aos="fade-up">
    <h2 className="section-title">Journey</h2>
    <p className="section-subtitle">Where I've been and what I've built</p>

    <div className="timeline">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="timeline-marker">
            <FontAwesomeIcon icon={exp.icon} />
          </div>
          <div className="timeline-card">
            <div className="timeline-header">
              <h3>{exp.company}</h3>
              <span className="timeline-role">{exp.role}</span>
              <span className="timeline-period">{exp.period}</span>
            </div>
            <p>{exp.description}</p>
            <div className="timeline-highlight">
              <strong>{exp.highlight}</strong>
            </div>
            <div className="timeline-tech">
              {exp.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="education-certs" data-aos="fade-up">
      <div className="edu-card">
        <FontAwesomeIcon icon={faGraduationCap} className="edu-icon" />
        <h3>Bachelor's in Information Systems</h3>
        <p>PUC Minas — In Progress</p>
      </div>
      <div className="edu-card">
        <FontAwesomeIcon icon={faCertificate} className="edu-icon" />
        <h3>DevOps Essentials</h3>
        <p>A Cloud Guru — Jul 2024</p>
      </div>
      <div className="edu-card">
        <FontAwesomeIcon icon={faGlobe} className="edu-icon" />
        <h3>English — Fluent</h3>
        <p>Cambridge Certified + London experience</p>
      </div>
    </div>
  </section>
);

// Projects Section
const projects = [
  {
    title: "Jobs Board — jobs.theo.tec.br",
    description:
      "A daily LinkedIn job crawler that aggregates and serves job listings. Built with Python and deployed live — currently in active development.",
    link: "https://jobs.theo.tec.br",
    linkLabel: "Visit Site",
    tags: ["Python", "Web Scraping", "Live"],
  },
  {
    title: "Exchange Converter CLI",
    description: "A CLI application built in Go for currency exchange conversion.",
    link: "https://github.com/ReformedTheo/cli_exchange_converter",
    linkLabel: "GitHub",
    tags: ["Go", "CLI"],
  },
  {
    title: "Open Face Recognition",
    description:
      "Face recognition application built in Python using OpenCV.",
    link: "https://github.com/ReformedTheo/Open-FR",
    linkLabel: "GitHub",
    tags: ["Python", "OpenCV", "ML"],
  },
  {
    title: "This Portfolio",
    description:
      "The very site you're looking at — a One Piece-themed React portfolio.",
    link: "https://github.com/ReformedTheo/portfolio",
    linkLabel: "GitHub",
    tags: ["React", "CSS", "One Piece"],
  },
];

const Projects = () => (
  <section id="projects" data-aos="fade-up">
    <h2 className="section-title">Projects</h2>
    <p className="section-subtitle">Things I've built</p>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card" data-aos="zoom-in">
          <div className="project-card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.linkLabel} →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact" data-aos="fade-up">
    <h2 className="section-title">Get in Touch</h2>
    <p className="section-subtitle">Let's work on something together</p>

    <div className="contact-cards">
      <a href="mailto:me@theo.tec.br" className="contact-card">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>me@theo.tec.br</span>
      </a>
      <a
        href="https://www.linkedin.com/in/théo-xavier-lopes-586751239/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/ReformedTheo"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </a>
      <a
        href="https://calendly.com/reformedtheo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <FontAwesomeIcon icon={faCalendar} />
        <span>Schedule a Chat</span>
      </a>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer>
    <div className="footer-content">
      <img
        src={`${process.env.PUBLIC_URL}/thousandSunny.png`}
        alt="Thousand Sunny"
        className="footer-sunny"
      />
      <p>
        {new Date().getFullYear()} Theo Xavier Lopes
      </p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/théo-xavier-lopes-586751239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ReformedTheo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </footer>
);

// App Component
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main>
        <AboutMe />
        <Skills />
        <Voyage />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
