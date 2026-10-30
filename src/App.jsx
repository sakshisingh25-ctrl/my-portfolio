
import { useState } from "react";
import "./App.css";

const technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Git & GitHub",
  "MS Excel",
  "Canva",
];

const softSkills = [
  "Communication",
  "Active Listening",
  "Problem-Solving",
  "Teamwork",
  "Adaptability",
  "Time Management",
  "Empathy",
  "Willingness to Learn",
];

const projects = [
  {
    number: "01",
    name: "JobShield",
    type: "Problem-solving project",
    description:
      "A project focused on helping job seekers identify warning signs in suspicious job opportunities and make more informed decisions.",
    tags: ["React", "JavaScript", "Web Development"],
    link: "https://github.com/sakshisingh25-ctrl",
  },
  {
    number: "02",
    name: "Jobify",
    type: "Career & job search",
    description:
      "A career-focused web project designed to provide a starting point for people exploring job opportunities and career information.",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://github.com/sakshisingh25-ctrl",
  },
  {
    number: "03",
    name: "Student Management System",
    type: "Learning project",
    description:
      "A student-focused interface for organizing student information and exploring features such as profiles, courses, and a dashboard.",
    tags: ["React", "CSS", "UI Design"],
    link: "https://github.com/sakshisingh25-ctrl",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            sakshi<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#journey" onClick={closeMenu}>My Journey</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Let's Connect <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot"></span>
              Learning, building & growing
            </div>

            <p className="hero-greeting">HELLO, I'M SAKSHI</p>

            <h1>
              A curious mind,
              <br />
              <span>building my way</span>
              <br />
              into technology.
            </h1>

            <p className="hero-description">
              I'm a B.Com student exploring web development, building practical
              projects, and learning how technology can solve real problems.
              My journey is about more than code — it's also about people,
              responsibility, and personal growth.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↘</span>
              </a>
              <a className="button button-secondary" href="#about">
                Get to know me
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line"></span>
              Not there yet. Growing every day.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="profile-frame">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Portrait of Sakshi"
                className="profile-image"
              />
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">✳</span>
              <div>
                <strong>Always learning</strong>
                <small>One step at a time</small>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-icon terracotta-icon">↗</span>
              <div>
                <strong>People + Technology</strong>
                <small>What I'm exploring</small>
              </div>
            </div>

            <span className="visual-spark spark-one">✳</span>
            <span className="visual-spark spark-two">✦</span>
          </div>

          <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-intro">
              <span className="eyebrow">A LITTLE ABOUT ME</span>
              <h2>
                I'm learning to build
                <span className="text-accent"> things</span> — and to believe
                in myself while doing it.
              </h2>
              <div className="about-decoration">“</div>
            </div>

            <div className="about-story">
              <p>
                I'm a B.Com student at KMT Government Girls' College, Raigarh,
                building my path into technology while completing my degree.
              </p>

              <p>
                At NavGurukul, my learning has gone beyond technical skills.
                I've had opportunities to work with students, take
                responsibility, support others, and face situations that have
                challenged me to grow.
              </p>

              <p>
                I am naturally someone who takes time to open up. I've been
                working on expressing my thoughts more confidently, asking
                questions, listening carefully, and communicating with
                different people. I'm still improving, and that's an important
                part of my journey.
              </p>

              <p>
                Today, I'm learning web development by building projects,
                exploring new tools, accepting feedback, and trying to turn
                what I learn into something useful.
              </p>

              <div className="about-signoff">
                <span className="signoff-line"></span>
                <span>A work in progress, by choice.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL GROWTH */}
        <section className="section growth-section" id="growth">
          <div className="container">
            <SectionHeading
              eyebrow="MORE THAN A SKILL LIST"
              title="The growth you don't see in a certificate."
              description="Some of the most valuable things I've been learning come from everyday experiences, responsibilities, and the willingness to try again."
            />

            <div className="growth-grid">
              <article className="growth-card growth-card-featured">
                <span className="growth-number">01 / PEOPLE</span>
                <div className="growth-symbol">↗</div>
                <h3>Finding my voice</h3>
                <p>
                  Learning to initiate conversations, express my thoughts,
                  ask questions, and communicate with more confidence.
                </p>
              </article>

              <article className="growth-card">
                <span className="growth-number">02 / RESPONSIBILITY</span>
                <div className="growth-symbol">◎</div>
                <h3>Showing up for others</h3>
                <p>
                  Understanding students' concerns, listening patiently, and
                  trying to help instead of assuming I already know the answer.
                </p>
              </article>

              <article className="growth-card">
                <span className="growth-number">03 / MINDSET</span>
                <div className="growth-symbol">✳</div>
                <h3>Getting comfortable with learning</h3>
                <p>
                  Accepting that mistakes are part of the process and that
                  asking for help is also a way to grow.
                </p>
              </article>

              <article className="growth-card">
                <span className="growth-number">04 / PRACTICE</span>
                <div className="growth-symbol">⌘</div>
                <h3>Turning ideas into projects</h3>
                <p>
                  Moving from learning concepts to creating interfaces,
                  solving problems, and improving through practice.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* NAVGURUKUL JOURNEY */}
        <section className="section journey-section" id="journey">
          <div className="container">
            <div className="journey-heading">
              <div>
                <span className="eyebrow">A CHAPTER THAT MATTERS</span>
                <h2>
                  My journey at
                  <br />
                  <span>NavGurukul.</span>
                </h2>
              </div>

              <p>
                A place where learning has meant more than completing lessons:
                it has meant taking initiative, working with people, and
                discovering what I can improve.
              </p>
            </div>

            <div className="journey-timeline">
              <article className="timeline-item">
                <div className="timeline-marker">01</div>
                <div className="timeline-content">
                  <span className="timeline-label">LEARNING</span>
                  <h3>Building a foundation</h3>
                  <p>
                    I've been developing my understanding of HTML, CSS,
                    JavaScript, React, Python fundamentals, and GitHub.
                    Building projects helps me connect concepts with practice.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker">02</div>
                <div className="timeline-content">
                  <span className="timeline-label">COMMUNITY</span>
                  <h3>Learning through responsibility</h3>
                  <p>
                    Supporting students through life-skills activities and
                    technical challenges has helped me understand the
                    importance of patience, clear communication, and teamwork.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker">03</div>
                <div className="timeline-content">
                  <span className="timeline-label">PERSONAL GROWTH</span>
                  <h3>Becoming more confident, one step at a time</h3>
                  <p>
                    I am learning to speak up, take initiative, listen without
                    rushing to respond, and handle problems more calmly. These
                    changes are ongoing, but I value the progress.
                  </p>
                </div>
              </article>
            </div>

            <div className="journey-note">
              <span className="journey-note-icon">✳</span>
              <p>
                <strong>What this journey means to me:</strong> Growth isn't
                always a big achievement. Sometimes, it's having a conversation
                that once felt difficult or trying again when something doesn't
                work.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="LEARNING BY CONTRIBUTING"
              title="My experience"
              description="Roles that have helped me practise communication, responsibility, digital literacy, and problem-solving."
            />

            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-index">01</div>
                <div className="experience-main">
                  <div className="experience-topline">
                    <span className="experience-type">STUDENT SUPPORT</span>
                    <span className="experience-context">NavGurukul</span>
                  </div>
                  <h3>Life Skills Coordinator (LSC)</h3>
                  <p>
                    Supported students with English communication and digital
                    literacy through learning activities, Duolingo practice,
                    and Google Sheets, while encouraging participation and
                    consistent learning.
                  </p>
                  <div className="tag-list">
                    <span>Communication</span>
                    <span>Digital Literacy</span>
                    <span>Student Support</span>
                  </div>
                </div>
                <div className="experience-arrow">↗</div>
              </article>

              <article className="experience-card">
                <div className="experience-index">02</div>
                <div className="experience-main">
                  <div className="experience-topline">
                    <span className="experience-type">TECHNICAL SUPPORT</span>
                    <span className="experience-context">NavGurukul</span>
                  </div>
                  <h3>IT Coordinator</h3>
                  <p>
                    Helped students troubleshoot laptop and software issues,
                    navigate everyday digital challenges, and follow basic
                    technical guidance while developing my own problem-solving
                    and communication skills.
                  </p>
                  <div className="tag-list">
                    <span>Troubleshooting</span>
                    <span>Problem-Solving</span>
                    <span>Digital Support</span>
                  </div>
                </div>
                <div className="experience-arrow">↗</div>
              </article>
            </div>

            <p className="experience-footnote">
              These experiences have helped me learn by doing, listening, and
              working with others.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="container skills-layout">
            <div className="skills-intro">
              <span className="eyebrow">WHAT I'M WORKING WITH</span>
              <h2>
                Skills I'm
                <br />
                <span>building on.</span>
              </h2>
              <p>
                I'm continuing to strengthen my foundations through practice,
                projects, and feedback. This is a learning journey, not a
                finished checklist.
              </p>
            </div>

            <div className="skills-content">
              <div className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-group-number">01</span>
                  <h3>Technical skills</h3>
                </div>
                <div className="skills-grid">
                  {technicalSkills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      <span className="skill-dot"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-group-number">02</span>
                  <h3>People & work skills</h3>
                </div>
                <div className="skills-grid">
                  {softSkills.map((skill) => (
                    <span className="skill-pill soft-pill" key={skill}>
                      <span className="skill-check">✓</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="projects-heading-row">
              <SectionHeading
                eyebrow="LEARNING THROUGH BUILDING"
                title="Things I've been creating."
                description="Each project is an opportunity to practise, solve a problem, and understand something more deeply."
              />
              <a
                className="text-link"
                href="https://github.com/sakshisingh25-ctrl"
                target="_blank"
                rel="noreferrer"
              >
                Visit my GitHub <span>↗</span>
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                    <span className="project-decoration">↗</span>
                  </div>

                  <div className="project-art" aria-hidden="true">
                    <span className="art-circle art-circle-one"></span>
                    <span className="art-circle art-circle-two"></span>
                    <span className="art-line"></span>
                    <span className="art-square"></span>
                    <span className="art-symbol">
                      {project.number === "01"
                        ? "✓"
                        : project.number === "02"
                          ? "↗"
                          : "▦"}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore project <span>↗</span>
                  </a>
                </article>
              ))}
            </div>

            <p className="projects-note">
              I'm continuing to improve these projects as my skills develop.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section" id="education">
          <div className="container education-layout">
            <div>
              <span className="eyebrow">MY EDUCATION</span>
              <h2>
                Learning from
                <br />
                different worlds.
              </h2>
              <p className="education-intro">
                My commerce education and my technology journey are helping me
                explore different ways to understand and solve problems.
              </p>
            </div>

            <div className="education-list">
              <article className="education-item">
                <div className="education-year">2024 — 2027</div>
                <div>
                  <h3>Bachelor of Commerce (B.Com)</h3>
                  <p>KMT Government Girls' College, Raigarh</p>
                  <span>Shaheed Nandkumar Patel University</span>
                </div>
                <span className="education-status">In progress</span>
              </article>

              <article className="education-item">
                <div className="education-year">2023 — 2024</div>
                <div>
                  <h3>Class XII — Commerce</h3>
                  <p>Carmel Girl's Higher Secondary School, Raigarh</p>
                </div>
                <span className="education-status">Completed</span>
              </article>

              <article className="education-item">
                <div className="education-year">2021 — 2022</div>
                <div>
                  <h3>Class X</h3>
                  <p>Abhinav High School, Raigarh</p>
                </div>
                <span className="education-status">Completed</span>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
            <h2>
              Let's learn,
              <br />
              <span>build, and grow.</span>
            </h2>
            <p>
              I'm open to connecting with people who enjoy sharing ideas,
              learning together, and creating things that make a difference.
            </p>

            <div className="contact-actions">
              <a
                className="button button-light"
                href="mailto:sakshisingh25@navgurukul.org"
              >
                Say hello <span>↗</span>
              </a>
              <a
                className="button button-outline-light"
                href="https://github.com/sakshisingh25-ctrl"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span>↗</span>
              </a>
            </div>

            <div className="contact-bottom-note">
              <span className="contact-star">✳</span>
              One project, one lesson, one step at a time.
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="brand footer-brand">
            sakshi<span>.</span>
          </a>
          <p>Designed with curiosity and a willingness to grow.</p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
