
import "./App.css";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git & GitHub",
    "MS Excel",
    "Canva",
];

const projects = [
    {
        title: "JobShield",
        category: "React · TypeScript",
        description:
            "A project designed to help job seekers identify suspicious job offers and recognize common scam warning signs.",
        link: "https://github.com/sakshisingh25-ctrl",
    },
    {
        title: "Jobify",
        category: "React · CSS",
        description:
            "A career platform practice project featuring job search, login, registration, and contact interfaces.",
        link: "https://github.com/sakshisingh25-ctrl",
    },
    {
        title: "Student Management System",
        category: "React · CSS",
        description:
            "A student dashboard project with profile information, courses, navigation, and a clean interface.",
        link: "https://github.com/sakshisingh25-ctrl",
    },
];

function App() {
    return (
        <div className="portfolio">
            <header className="navbar">
                <a href="#home" className="logo">
                    Sakshi<span>.</span>
                </a>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>
                <section className="hero section" id="home">
                    <div className="hero-content">
                        <p className="eyebrow">HELLO, I'M SAKSHI</p>

                        <h1>
                            Aspiring Web Developer
                            <span> & Problem Solver.</span>
                        </h1>

                        <p className="hero-description">
                            I enjoy building clean, user-friendly websites
                            and using technology to solve real-world problems.
                            I am continuously learning and improving my skills.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="button primary-button">
                                View My Projects ↗
                            </a>

                            <a href="#contact" className="button secondary-button">
                                Contact Me
                            </a>
                        </div>

                        <p className="hero-note">
                            Open to learning opportunities and internships.
                        </p>
                    </div>

                    <div className="hero-image-wrapper">
                        <div className="image-decoration"></div>
                        <img
                            src="/profile.png"
                            alt="Sakshi, aspiring web developer"
                            className="profile-image"
                        />
                        <div className="image-caption">
                            <span className="status-dot"></span>
                            Learning. Building. Growing.
                        </div>
                    </div>
                </section>

                <section className="section about-section" id="about">
                    <div className="section-heading">
                        <p className="eyebrow">GET TO KNOW ME</p>
                        <h2>About Me</h2>
                    </div>

                    <div className="about-content">
                        <p>
                            I'm a B.Com student interested in web development,
                            technology, and building useful digital products.
                            My journey combines my academic background with
                            practical coding projects.
                        </p>

                        <p>
                            I have been learning frontend development and
                            programming fundamentals by creating projects,
                            solving problems, and exploring new tools. My goal
                            is to grow as a developer and contribute to a
                            collaborative team.
                        </p>
                    </div>
                </section>

                <section className="section skills-section" id="skills">
                    <div className="section-heading">
                        <p className="eyebrow">WHAT I'M LEARNING</p>
                        <h2>My Skills</h2>
                        <p className="section-description">
                            Technologies and tools I use in my learning and projects.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div className="skill-card" key={skill}>
                                <span className="skill-icon">✦</span>
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section projects-section" id="projects">
                    <div className="section-heading">
                        <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
                        <h2>Featured Projects</h2>
                        <p className="section-description">
                            Practical projects that help me learn and solve problems.
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <article className="project-card" key={project.title}>
                                <div className="project-top">
                                    <div className="project-icon">&lt;/&gt;</div>
                                    <span className="project-category">
                                        {project.category}
                                    </span>
                                </div>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    View on GitHub ↗
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section education-section" id="education">
                    <div className="section-heading">
                        <p className="eyebrow">MY ACADEMIC JOURNEY</p>
                        <h2>Education</h2>
                    </div>

                    <article className="education-card">
                        <div className="education-marker"></div>
                        <div>
                            <h3>Bachelor of Commerce (B.Com)</h3>
                            <p>KMT Government Girls' College, Raigarh</p>
                            <span>Expected graduation: 2027</span>
                        </div>
                    </article>
                </section>

                <section className="section contact-section" id="contact">
                    <p className="eyebrow">LET'S CONNECT</p>
                    <h2>Have an opportunity in mind?</h2>
                    <p>
                        I'm interested in internships, learning opportunities,
                        and connecting with people in technology.
                    </p>

                    <a
                        href="mailto:your-email@example.com"
                        className="button primary-button"
                    >
                        Email Me ↗
                    </a>

                    <div className="social-links">
                        <a
                            href="https://github.com/sakshisingh25-ctrl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Sakshi. Built with React.</p>
            </footer>
        </div>
    );
}

export default App;



