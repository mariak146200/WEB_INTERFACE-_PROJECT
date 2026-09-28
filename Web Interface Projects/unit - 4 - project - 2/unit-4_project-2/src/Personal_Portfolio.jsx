import { useState } from "react";
import "./Personal_Portfolio.css";
import mariyappanPhoto from "./assets/MARIYAPPAN PHOTO.jpeg";

function Personal_Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "UI/UX"
  ];

  const projects = [
    {
      title: "Digital Food Nutrition Comparator",
      description:
        "A web application that allows users to select food items and compare calories, protein, carbohydrates and fats.",
      tech: "React • JavaScript • CSS"
    },
    {
      title: "Student Portal",
      description:
        "A student portal that displays student profile, subjects, attendance, marks and academic information.",
      tech: "React • Vite • CSS"
    },
    {
      title: "Online Food Ordering System",
      description:
        "A simple food ordering website where users can explore food items and view an organized ordering interface.",
      tech: "HTML • CSS • JavaScript"
    }
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          MARIYAPPAN<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-left">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            MARIYAPPAN <span>P</span>
          </h1>

          <h2>
            B.E. Computer Science
            <br />
            <span>and Engineering Student</span>
          </h2>

          <p className="hero-text">
            I create modern and responsive websites using React,
            JavaScript and creative UI/UX designs. I enjoy learning
            new technologies and building useful projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#about" className="secondary-btn">
              About Me
            </a>
          </div>

          <div className="social-text">
            <span>JAVA</span>
            <span>PYTHON</span>
            <span>REACT</span>
            <span>UI/UX</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">

            <div className="circle-bg"></div>

            <img
              className="profile-avatar"
              src={mariyappanPhoto}
              alt="MARIYAPPAN"
            />

            <div className="profile-info">
              <span>STUDENT DEVELOPER</span>
              <strong>II YEAR • CSE</strong>
            </div>

          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section about">

        <div className="section-title">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I'm <strong>Mariyappan P</strong>, a second-year
              Computer Science and Engineering student.
            </p>

            <p>
              I am interested in web development, UI/UX designing,
              programming and building real-world applications.
              Currently, I am improving my skills in React,
              JavaScript, Java, Python and SQL.
            </p>

            <p>
              My goal is to become a skilled developer by
              continuously learning and creating practical projects.
            </p>

          </div>

          <div className="about-boxes">

            <div className="info-box">
              <span>EDUCATION</span>
              <h3>B.E. CSE</h3>
              <p>II Year</p>
            </div>

            <div className="info-box">
              <span>COLLEGE</span>
              <h3>PDKVCET</h3>
              <p>Prince Dr. K. Vasudevan College</p>
            </div>

            <div className="info-box">
              <span>FOCUS</span>
              <h3>WEB DEVELOPMENT</h3>
              <p>React & UI/UX</p>
            </div>

            <div className="info-box">
              <span>STATUS</span>
              <h3>LEARNING</h3>
              <p>Open to Opportunities</p>
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">

        <div className="section-title">
          <span>02</span>
          <h2>My Skills</h2>
        </div>

        <p className="section-description">
          Technologies and tools that I am currently learning
          and working with.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{skill}</h3>

            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">

        <div className="section-title">
          <span>03</span>
          <h2>My Projects</h2>
        </div>

        <div className="projects-container">

          <div className="project-menu">

            {projects.map((project, index) => (

              <button
                key={project.title}
                className={
                  activeProject === index
                    ? "project-button active"
                    : "project-button"
                }
                onClick={() => setActiveProject(index)}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {project.title}

              </button>

            ))}

          </div>

          <div className="project-display">

            <span className="project-number">
              PROJECT{" "}
              {String(activeProject + 1).padStart(2, "0")}
            </span>

            <h3>
              {projects[activeProject].title}
            </h3>

            <p>
              {projects[activeProject].description}
            </p>

            <div className="project-tech">
              {projects[activeProject].tech}
            </div>

            <button className="details-btn">
              PROJECT DETAILS →
            </button>

          </div>

        </div>

      </section>

      {/* JOURNEY */}
      <section className="section journey">

        <div className="section-title">
          <span>04</span>
          <h2>My Journey</h2>
        </div>

        <div className="journey-list">

          <div className="journey-item">

            <div className="year">
              2024
            </div>

            <div>
              <h3>Started Engineering</h3>
              <p>
                Started my B.E. Computer Science and
                Engineering journey.
              </p>
            </div>

          </div>

          <div className="journey-item">

            <div className="year">
              2025
            </div>

            <div>
              <h3>Programming Practice</h3>
              <p>
                Improved Java, Python, DSA and
                problem-solving skills.
              </p>
            </div>

          </div>

          <div className="journey-item">

            <div className="year">
              2026
            </div>

            <div>
              <h3>Web Development</h3>
              <p>
                Started building React applications
                and modern responsive websites.
              </p>
            </div>

          </div>

          <div className="journey-item">

            <div className="year">
              NOW
            </div>

            <div>
              <h3>Building Projects</h3>
              <p>
                Developing real-world projects and
                improving development skills.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">

        <div className="contact-card">

          <span>05 / CONTACT</span>

          <h2>
            Let's build
            <br />
            something <em>great.</em>
          </h2>

          <p>
            I'm always interested in learning,
            creating and working on new projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="email"
          >
            your-email@example.com
          </a>

          <div className="contact-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          © 2026 MARIYAPPAN P
        </div>

        <div>
          REACT • JAVASCRIPT • UI/UX
        </div>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default Personal_Portfolio;