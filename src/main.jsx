import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Layers3,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import "./style.css";

const GITHUB =
  "https://github.com/Rathana1688/KoemSovannrathana_final_FSD001_26";
const FACEBOOK = "https://www.facebook.com/share/19S5E9oAQL/?mibextid=wwXIfr";
const JOB_PORTAL = "https://jobportal-frontend-seven-flax.vercel.app/";
const COFFEE_SHOP = "https://coffeeshopprofessionalwebsite7.vercel.app/";
const TELEGRAM = "https://t.me/Rathana140706";
const STUDENT_SYSTEM =
  "https://student-management-system-6jhzi90sg-rathana1688s-projects.vercel.app/";

const projects = [
  {
    number: "01",
    title: "Job Portal",
    category: "FULL STACK WEB APP",
    description:
      "A job platform connecting employers with job seekers, featuring role-based experiences and job application workflows.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    color: "lime",
    icon: "↗",
    link: JOB_PORTAL,
    live: JOB_PORTAL,
    image: "/job-portal.png",
  },
  {
    number: "02",
    title: "Coffee Shop Management",
    category: "MANAGEMENT SYSTEM",
    description:
      "A management experience for products, categories, inventory and orders, built around a practical café workflow.",
    tags: ["JavaScript", "Node.js", "MongoDB"],
    color: "blue",
    icon: "☕",
    link: COFFEE_SHOP,
    live: COFFEE_SHOP,
    image: "/coffee-shop.png",
  },
  {
    number: "03",
    title: "Student Management System",
    category: "LIVE WEB APPLICATION",
    description:
      "A student management interface for organizing student records and presenting academic information in a clear dashboard.",
    tags: ["React", "JavaScript", "Web UI"],
    color: "purple",
    icon: "▦",
    link: STUDENT_SYSTEM,
    live: STUDENT_SYSTEM,
    image: "/student-management.png",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const update = () =>
      setScrollProgress(
        window.scrollY /
          Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight,
          ),
      );
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  const [copied, setCopied] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sovannrathanakoem5@gmail");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:sovannrathanakoem5@gmail";
    }
  };
  return (
    <div className="site-shell" style={{ "--scroll-progress": scrollProgress }}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <div className="ambient-background" aria-hidden="true">
        <div className="scene-grid" />
        <div className="scene-glow glow-green" />
        <div className="scene-glow glow-blue" />
        <div className="scene-glow glow-purple" />
        <div className="scene-ring ring-a" />
        <div className="scene-ring ring-b" />
        <div className="scene-ring ring-c" />
        <div className="scene-orb orb-3d orb-3d-a" />
        <div className="scene-orb orb-3d orb-3d-b" />
        <div className="scene-orb orb-3d orb-3d-c" />
        <div className="scene-particles">
          {Array.from({ length: 22 }, (_, i) => (
            <i key={i} style={{ "--i": i }} />
          ))}
        </div>
        <span className="ambient-blob blob-one" />
        <span className="ambient-blob blob-two" />
        <span className="ambient-blob blob-three" />
        <span className="ambient-noise" />
      </div>
      <div className="topline">
        <span>PORTFOLIO / 2026</span>
        <span>
          PHNOM PENH, CAMBODIA <i className="live-dot" />
        </span>
      </div>
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">R.</span>
          <span>
            KOEM SOVANNRATHANA<small>DEVELOPER PORTFOLIO</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> AVAILABLE FOR OPPORTUNITIES
            </div>
            <h1>
              Building digital
              <br />
              things with <span>purpose.</span>
            </h1>
            <p className="hero-intro">
              Hi, I'm <strong>Rathana</strong> — a Full Stack Web Development
              student who enjoys turning ideas into thoughtful, useful web
              experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a href="#contact" className="text-link">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">CURRENTLY</span>
                <strong>Year 3 · SETEC Institute</strong>
              </div>
              <div>
                <span className="meta-label">FOCUS</span>
                <strong>Frontend & Full Stack</strong>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="portrait-halo halo-a"></div>
            <div className="portrait-halo halo-b"></div>
            <div className="portrait-frame">
              <img
                src="/portrait.jpeg"
                alt="KOEM SOVANNRATHANA wearing a navy suit at SETEC Institute"
              />
              <div className="portrait-overlay">
                <span>KOEM SOVANNRATHANA</span>
                <b>FULL STACK DEVELOPER</b>
              </div>
            </div>
            <div className="portrait-spark spark-one">✳</div>
            <div className="portrait-spark spark-two">✦</div>
            <div className="floating-card card-code">
              <Code2 size={17} />
              <span>Code with intent</span>
            </div>
            <div className="floating-card card-stack">
              <span className="stack-dot" /> FULL STACK
              <br />
              <b>IN PROGRESS</b>
            </div>
            <div className="vertical-label">DESIGN · DEVELOP · LEARN</div>
            <div className="hero-index">
              01 <span>/ 04</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line"></span> SCROLL TO DISCOVER
          </a>
        </section>

        <section className="intro-strip">
          <div className="strip-star">✳</div>
          <p>
            CURIOUS BY NATURE <span>✳</span> BUILT THROUGH PRACTICE{" "}
            <span>✳</span> ALWAYS LEARNING <span>✳</span>{" "}
          </p>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-kicker">
            <span>01 — ABOUT ME</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>
          <div className="about-grid">
            <h2>
              Curiosity is where
              <br />
              every good <em>idea</em>
              <br />
              begins.
            </h2>
            <div className="about-content">
              <p className="large-copy">
                I'm a third-year student at SETEC Institute, focused on Full
                Stack Web Development.
              </p>
              <p>
                I enjoy learning how websites work from the interface users see
                to the logic and data behind it. Through school and personal
                projects, I'm building practical skills in modern web
                technologies and learning to solve problems one feature at a
                time.
              </p>
              <p>
                I'm looking for opportunities to grow, collaborate with a team,
                and contribute to products that make a real difference.
              </p>
              <a href="#contact" className="underlined-link">
                A little more about me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stats-row">
            <div>
              <strong>
                03<span>+</span>
              </strong>
              <small>PROJECT CONCEPTS</small>
            </div>
            <div>
              <strong>09</strong>
              <small>CORE TECHNOLOGIES</small>
            </div>
            <div>
              <strong>∞</strong>
              <small>THINGS TO LEARN</small>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-kicker">
            <span>02 — TOOLKIT</span>
            <span>TOOLS I LEARN AND BUILD WITH</span>
          </div>
          <div className="skills-heading">
            <h2>
              My current
              <br />
              <em>toolkit.</em>
            </h2>
            <p>
              Every project is a chance to strengthen the fundamentals, explore
              new tools, and write better code than yesterday.
            </p>
          </div>
          <div className="skill-groups">
            <div className="skill-group">
              <div className="skill-group-head">
                <span>01</span>
                <h3>FRONTEND</h3>
                <Layers3 size={19} />
              </div>
              <div className="skill-pills">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Responsive UI</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-head">
                <span>02</span>
                <h3>BACKEND & DATA</h3>
                <Code2 size={19} />
              </div>
              <div className="skill-pills">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-head">
                <span>03</span>
                <h3>WORKFLOW</h3>
                <Smartphone size={19} />
              </div>
              <div className="skill-pills">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Debugging</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-kicker">
            <span>03 — SELECTED WORK</span>
            <span>LEARNING BY BUILDING</span>
          </div>
          <div className="projects-heading">
            <h2>
              Ideas made
              <br />
              <em>tangible.</em>
            </h2>
            <p>
              A selection of academic and practice projects that reflect my
              journey in web development.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article className={`project-card ${p.color}`} key={p.number}>
                <div className="project-top">
                  <span>{p.number} / PROJECT</span>
                  <span>{p.category}</span>
                </div>
                <div className="project-main">
                  <div className="project-graphic">
                    <img
                      className="project-screenshot"
                      src={p.image}
                      alt={`${p.title} website screenshot`}
                      loading="lazy"
                    />
                    <span className="graphic-number">{p.number}</span>
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        {p.live
                          ? "View live website"
                          : "View GitHub repository"}{" "}
                        <ArrowUpRight size={17} />
                      </a>
                      {p.live && (
                        <a
                          href={GITHUB}
                          target="_blank"
                          rel="noreferrer"
                          className="project-secondary"
                        >
                          GitHub <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-foot">
            <span>MORE PROJECTS WILL BE ADDED AS I GROW.</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              VISIT GITHUB <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section className="journey section-pad" id="journey">
          <div className="section-kicker">
            <span>04 — MY JOURNEY</span>
            <span>LEARNING, BUILDING, IMPROVING</span>
          </div>
          <div className="journey-heading">
            <h2>
              Still growing.
              <br />
              <em>Always building.</em>
            </h2>
            <p>
              A snapshot of where I am and what I'm working toward as a
              developer.
            </p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-index">01</span>
              <div>
                <span className="timeline-date">CURRENT · YEAR 3</span>
                <h3>Full Stack Web Development</h3>
                <p>
                  SETEC Institute — strengthening my frontend, backend,
                  database, and software development fundamentals.
                </p>
              </div>
              <span className="timeline-status">IN PROGRESS</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-index">02</span>
              <div>
                <span className="timeline-date">PROJECT-BASED LEARNING</span>
                <h3>From concepts to working products</h3>
                <p>
                  Practicing through a Job Portal, Coffee Shop Website, and
                  Product Management System.
                </p>
              </div>
              <span className="timeline-status">BUILDING</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-index">03</span>
              <div>
                <span className="timeline-date">NEXT MILESTONE</span>
                <h3>Join a team and keep learning</h3>
                <p>
                  Looking for opportunities to collaborate, learn from
                  experienced developers, and contribute to real-world projects.
                </p>
              </div>
              <span className="timeline-status">UP NEXT</span>
            </article>
          </div>
          <div className="journey-note">
            <span>THE MINDSET</span>
            <p>Stay curious. Keep shipping. Learn from every bug.</p>
            <span className="note-star">✳</span>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-orb orb-a"></div>
          <div className="contact-orb orb-b"></div>
          <div className="section-kicker">
            <span>05 — NEXT CHAPTER</span>
            <span>OPEN TO LEARNING & COLLABORATION</span>
          </div>
          <div className="contact-body">
            <div className="contact-label">
              <span className="live-dot" /> LET'S BUILD SOMETHING
            </div>
            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>
            <p>
              I'm open to internships, entry-level opportunities, collaborative
              projects, and conversations with people who love building for the
              web.
            </p>
            <button className="contact-button" onClick={copyEmail}>
              {copied ? "Email copied!" : "Copy my email"}{" "}
              {copied ? <Mail size={18} /> : <ArrowUpRight size={18} />}
            </button>
          </div>
          <div className="contact-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Facebook <ArrowUpRight size={14} />
            </a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Telegram <ArrowUpRight size={14} />
            </a>
            <a href="mailto:sovannrathanakoem5@gmail">
              <Mail size={17} /> Email <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">R.</span>
          <span>
            KOEM SOVANNRATHANA<small>MADE WITH CURIOSITY</small>
          </span>
        </a>
        <span>© 2026 · DESIGNED & BUILT WITH CARE</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
