import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faAws,
  faLinux,
  faDocker,
  faJenkins,
  faGolang,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';
import theo_full from "./img/theo_full.png";
import app1Image from './img/app1.png';
import app2Image from './img/app2.png';


// About Me Component
const DynamicTitle = ({ titles, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150; // Speed of typing vs deleting
    let typingTimeout;

    if (!isDeleting && currentText === titles[currentIndex]) {
      // Pause before starting to delete text
      typingTimeout = setTimeout(() => setIsDeleting(true), interval);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % titles.length); // Move to next title or loop back
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
    <h2 className="title">
      {currentText}
      <span className="cursor">|</span>
    </h2>
  );
};

const AboutMe = () => (
  <section id="about" data-aos="fade-up">
    <div id="description">
      <div className="name-and-title">
        <h2 className="name-big">
          <span className="letter-t">T</span>héo
        </h2>
        <DynamicTitle
          titles={["Software Engineer", "DevOps Engineer"]}
          interval={3000}
        />
      </div>
      <p className="description">
        I am a Software Developer with 2+ years of experience working with
        multiple programming languages, such as Python and Go. Currently
        graduating under Software Engineering at{" "}
        <a id="link" href="https://www.pucminas.br/">
          PUC MINAS
        </a>
        . My professional journey has evolved towards specializing in DevOps,
        with a keen interest in mastering containerization, CI/CD pipelines,
        infrastructure as code (IaC), and leveraging cloud computing platforms.
        <br></br>
        <br></br>
        I'm passionate about writing complex APIs, tools, automating processes
        and the DevOps culture. I've been working and learning about technology
        since I was very young and since I started programming, my passion for
        making life easier grew exponentially.
      </p>
      <div className="talk-to-me-button-container">
      <a href="#talktome" style={{ textDecoration: 'none' }}>
        <button className="talk-to-me-btn">Let's Talk!</button>
        </a>
      </div>
    </div>
    <div id="picture">
      <img src={theo_full} alt="Portrait of Théo" height="700" />
      <p>AI Generated image</p>
    </div>
  </section>
);

// Skills Component
const Skills = () => {
  const skillsWithIcons = [
    { name: "Jenkins", icon: faJenkins },
    { name: "Go", icon: faGolang },
    { name: "Python", icon: faPython },
    { name: "Linux", icon: faLinux },
    { name: "AWS", icon: faAws },
    { name: "Docker", icon: faDocker },
    { name: "GitHub", icon: faGithub}
  ];

  const skillsWithoutIcons = [
    "Ansible",
    "Terraform",
    "Django",
    "Microsoft SQL",
    "Github Actions"
  ];

  return (
    <section id="skills" data-aos="fade-right">
      <h2 className="talk-to-me-title">Core Skills</h2>
      <div className="skills-with-icons">
        {skillsWithIcons.map((skill) => (
          <div key={skill.name}>
            <FontAwesomeIcon icon={skill.icon} size="3x" />
          </div>
        ))}
      </div>
      <h2 className="title">Additional Skills</h2>
      <div className="skills-without-icons" data-aos="fade-left">
        <ul>
          {skillsWithoutIcons.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Projects Component
const projects = [
  {
    title: 'Exchange App',
    description: 'Exchange Converter CLI Application in GO',
    image: app1Image,
    github: 'https://github.com/ReformedTheo/cli_exchange_converter',
  },
  {
    title: 'Open Face Recognition',
    description: 'Face Recognition app built in Python using OpenCV',
    image: app2Image,
    github: 'https://github.com/ReformedTheo/Open-FR',
  },
  {
    title: 'My Portfolio',
    description: 'This very own website was overengineered for studying purposes',
    image: theo_full,
    github: 'https://github.com/ReformedTheo/portfolio',
  },
];

const Projects = () => (
  <section id="projects" data-aos="fade-up">
    <h2 className="talk-to-me-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Experience Component
const Experience = () => (
  <section id="experience" data-aos="fade-right">
    <div className="experience-box">
      <h2 className="title">Software Developer at PCX Tecnologia</h2>
      <span> 06/2023 - now </span>
      <p>
        <span>Experience in Software Maintenance:</span> Advanced maintenance of
        legacy software using Symantec Workflow, JavaScript, and C#, with strong
        analytical and problem-solving skills.Solid experience in management and
        maintenance of SQL Server databases. <br></br>
        <br></br>
        <br></br> <span>Prototype Development and New Solutions:</span> Planning
        and development of prototypes for RFID data reading and collection
        systems, using Go, Python, and technologies like OpenCV for facial
        recognition. Creation of REST APIs and implementation of Web Sockets for
        interactive and real-time applications. <br></br>
        <br></br>
        <br></br>
        <span>Experience in Android Testing:</span> Maintenance and testing of
        Android data collector applications using Java's JUnit library, focusing
        on quality control and bug prevention.
      </p>
    </div>
    {
      <div className="experience-box">
        <h2 className="title">Study Group at PUC Minas</h2>
        <span> 02/2024 - now</span>
        <p>
          Volunteer <span>Researcher</span> at the Software Engineering Study
          Group. Currently researching about{" "}
          <span>Productivity in Software Engineering Teams</span>. Gaining
          experience in scientific research and scientific article writing
        </p>
      </div>
    }
  </section>
);

// Talk To Me Component
const TalkToMe = () => {
  return (
    <section id="talktome" className="talk-to-me-section">
      <h2 className="talk-to-me-title">Let's Talk!</h2>
      <p className="talk-to-me-description">
        I'm always open for a conversation. Email me <span>me@theo.tec.br</span>{" "}
        <br></br> <br></br>or message me at{" "}
        <a
          id="link"
          href="https://www.linkedin.com/in/théo-xavier-lopes-586751239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> Linkedin {" "}
        </a>
     &nbsp;or&nbsp; 
        <a
          id="link"
          href="https://www.linkedin.com/in/théo-xavier-lopes-586751239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> Github{" "}
        </a>
        and we'll talk!
      </p>
      <a
        href="https://calendly.com/reformedtheo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="calendly-link-button"
      >
        Schedule a Chat
      </a>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <div className="social-media-icons" data-aos="fade-up" id="footer-social">
    <a
      href="https://www.linkedin.com/in/théo-xavier-lopes-586751239/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-linkedin social-icon"
      id="social-icon"
    >
      <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </a>
    <a
      href="https://github.com/ReformedTheo/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-github social-icon"
      id="social-icon"
    >
      <FontAwesomeIcon icon={faGithub} size="3x" />
    </a>
  </div>
);

// App Component
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 1000, // Animation duration
      easing: "ease-in-out", // An easing function
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className='App'>
      <nav>
        {/* Update navigation links with process.env.PUBLIC_URL */}
        <a href={`${process.env.PUBLIC_URL}/#about`}>About Me</a>
        <a href={`${process.env.PUBLIC_URL}/#skills`}>Skills</a>
        <a href={`${process.env.PUBLIC_URL}/#projects`}>Projects</a>
        <a href={`${process.env.PUBLIC_URL}/#experience`}>Experience</a>
      </nav>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <TalkToMe />
        <Footer />
      </main>
    </div>
  );
}

export default App;
