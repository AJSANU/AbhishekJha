import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import OrbitalVisual from "@/components/portfolio/OrbitalVisual";
import ProjectVisual from "@/components/portfolio/ProjectVisual";
import {
  profile,
  experience,
  projects,
  caseStudies,
  capabilities,
  testimonials,
  writing,
} from "@/constants/portfolio";

function Icon({ name = "arrow", className = "", ...props }) {
  const paths = {
    arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v13m-5-5 5 5 5-5M5 20h14" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M15 8V4H4v11h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />,
    cloud: (
      <path d="M7 18a5 5 0 0 1-1-9.9A6.5 6.5 0 0 1 18.6 9a4.5 4.5 0 0 1 0 9H7Z" />
    ),
    layers: <path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5" />,
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3m6 0h4" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

const navigation = [
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "writing", label: "Writing" },
];
const visuals = {
  platform: "cloud",
  projects: "viewer",
  encryption: "crypt",
  charts: "graphs",
  data: "scraper",
};

function SectionLabel({ number, children, light = false }) {
  return (
    <p className={`section-label${light ? " label-light" : ""}`}>
      <span>{number}</span>
      {children}
    </p>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navigation.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    document.querySelector("#main-navigation a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#home"
          className="brand"
          aria-label="Abhishek Jha, home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-monogram">
            a<span>j</span>
            <i />
          </span>
          <span className="brand-name">
            Abhishek Jha<span>SENIOR SOFTWARE ENGINEER</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${open ? "navigation-open" : ""}`}
        >
          {navigation.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Icon name="diagonal" />
          </a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <Icon name="diagonal" />
        </a>
        <button
          ref={menuRef}
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <Icon name="close" />
          ) : (
            <span className="menu-lines">
              <i />
              <i />
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function WorkDialog({ selected, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!selected) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selected]);
  return (
    <dialog
      ref={ref}
      className="work-dialog"
      aria-labelledby="work-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {selected && (
        <div className="dialog-content">
          <button
            className="icon-button dialog-close"
            onClick={onClose}
            aria-label="Close work details"
            autoFocus
          >
            <Icon name="close" />
          </button>
          <div className="dialog-art">
            <ProjectVisual kind={visuals[selected.visual] || selected.visual} />
          </div>
          <div className="dialog-body">
            <p className="eyebrow">
              {selected.company} · {selected.category}
            </p>
            <h2 id="work-dialog-title">{selected.name}</h2>
            <p className="dialog-intro">{selected.description}</p>
            <div className="dialog-metric">
              <strong>{selected.metric}</strong>
              <span>{selected.metricLabel}</span>
            </div>
            {selected.details.map((detail) => (
              <section key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
              </section>
            ))}
            <div className="tag-list">
              {selected.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="dialog-note">
              Selected professional contributions · Illustrations are
              conceptual.
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Home() {
  const [workType, setWorkType] = useState("industry");
  const [selected, setSelected] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState("");
  const copyTimer = useRef(null);
  const quote = testimonials[quoteIndex];
  const displayedWork =
    workType === "industry"
      ? caseStudies.filter((work) => work.type === "industry")
      : projects;
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight)
        node.classList.add("will-reveal");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied!");
    } catch {
      setCopyStatus("Select the email address to copy it.");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus(""), 3500);
  }
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-topline">
            <p className="eyebrow">
              <span className="status-dot" /> CURRENTLY AT ORACLE CLOUD
            </p>
            <p className="hero-location">
              <Icon name="globe" /> BENGALURU, INDIA
            </p>
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="hero-hello">
                Hello, I’m Abhishek{" "}
                <span className="hello-star" aria-hidden="true">
                  ✳
                </span>
              </p>
              <h1 id="hero-title">
                Engineering
                <br />
                ideas into
                <br />
                <span>real impact.</span>
              </h1>
              <p className="hero-description">
                I build intelligent cloud products, thoughtful interfaces, and
                the systems that bring them to life.
              </p>
              <div className="hero-actions">
                <a href="#work" className="button button-dark">
                  Explore my work <Icon name="diagonal" />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View résumé <Icon name="down" />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <OrbitalVisual />
              <div className="hero-art-caption">
                <span className="tiny-cross">+</span> THOUGHTFULLY DESIGNED.
                ENGINEERED TO SCALE. <span className="tiny-cross">+</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              Good engineering makes
              <br />
              <strong>complex things feel simple.</strong>
            </p>
            <div className="hero-mini-stat">
              <strong>
                30<span>+</span>
              </strong>
              <span>
                Articles written.
                <br />
                Knowledge shared.
              </span>
            </div>
            <a href="#work" className="scroll-cue">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-circle">↓</span>
            </a>
          </div>
        </section>
        <div className="company-strip">
          <div className="container company-inner">
            <p>
              EXPERIENCE THAT
              <br />
              <strong>SHAPES MY WORK</strong>
            </p>
            <div className="company-wordmark oracle-wordmark">
              ORACLE<span>CLOUD INFRASTRUCTURE</span>
            </div>
            <div className="company-wordmark teradata-wordmark">
              teradata<span>.</span>
            </div>
            <div className="company-wordmark amazon-wordmark">
              amazon
              <svg viewBox="0 0 100 19" aria-hidden="true">
                <path d="M12 3c24 13 49 13 76 0m-8-1 9 0-2 7" />
              </svg>
            </div>
            <span className="company-note">
              Different challenges.
              <br />
              One engineering mindset.
            </span>
          </div>
        </div>
        <section
          className="section container work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel number="01">SELECTED WORK</SectionLabel>
              <h2 id="work-title">
                Built with purpose.
                <br />
                <span className="muted-heading">Backed by impact.</span>
              </h2>
            </div>
            <p>
              From AI-powered products to the tools behind them.
              <br className="desktop-break" /> A few things I’ve helped bring to
              life.
            </p>
          </div>
          <div className="work-toolbar">
            <div className="work-filters" aria-label="Filter selected work">
              <button
                className={workType === "industry" ? "selected" : ""}
                aria-pressed={workType === "industry"}
                onClick={() => setWorkType("industry")}
              >
                Industry work <span>03</span>
              </button>
              <button
                className={workType === "personal" ? "selected" : ""}
                aria-pressed={workType === "personal"}
                onClick={() => setWorkType("personal")}
              >
                Personal projects <span>05</span>
              </button>
            </div>
            <a
              className="subtle-link"
              href={profile.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <Icon name="diagonal" />
            </a>
          </div>
          <div className="project-grid" key={workType}>
            {displayedWork.map((project, index) => (
              <article className="project-card" key={project.id}>
                {workType === "industry" ? (
                  <button
                    className="project-visual-link"
                    onClick={() => setSelected(project)}
                    aria-label={`Explore ${project.name}`}
                  >
                    <ProjectVisual
                      kind={visuals[project.visual] || project.visual}
                    />
                    <span className="project-open">
                      <Icon name="diagonal" />
                    </span>
                    <span className="project-index">
                      0{index + 1} / INDUSTRY
                    </span>
                  </button>
                ) : (
                  <a
                    href={project.demo || project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-visual-link"
                    aria-label={`Open ${project.name}`}
                  >
                    <ProjectVisual
                      kind={visuals[project.visual] || project.visual}
                    />
                    <span className="project-open">
                      <Icon name="diagonal" />
                    </span>
                    <span className="project-index">
                      0{index + 1} / PERSONAL
                    </span>
                  </a>
                )}
                <div className="project-content">
                  <p className="project-category">
                    {project.company || project.category}
                  </p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {workType === "industry" ? (
                    <button
                      className="project-foot"
                      onClick={() => setSelected(project)}
                    >
                      <span>
                        <strong>{project.metric}</strong> {project.metricLabel}
                      </span>
                      <Icon name="diagonal" />
                    </button>
                  ) : (
                    <div className="project-foot personal-foot">
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code <Icon name="code" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.demoLabel}
                          <Icon name="diagonal" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="work-caption">
            <span className="status-dot" />{" "}
            {workType === "industry"
              ? "Real-world contributions. Measurable outcomes."
              : "Ideas, experiments, and things built out of curiosity."}
            <span>
              {workType === "industry"
                ? "Concept illustrations · Details inside"
                : "Open source · Always learning"}
            </span>
          </p>
        </section>
        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="container section">
            <div className="section-heading" data-reveal>
              <div>
                <SectionLabel number="02" light>
                  THE JOURNEY
                </SectionLabel>
                <h2 id="experience-title">
                  Good work.
                  <br />
                  <span className="experience-heading-muted">
                    Great places.
                  </span>
                </h2>
              </div>
              <p>
                Learning from talented people.
                <br />
                Building things that matter.
                <br />
                Growing with every challenge.
              </p>
            </div>
            <div className="career-list">
              {experience.map((job, index) => (
                <details
                  className="career-item"
                  key={job.id}
                  open={index === 0}
                >
                  <summary>
                    <span className="career-number">0{index + 1}</span>
                    <span className={`career-logo career-logo-${job.id}`}>
                      {job.id === "oracle"
                        ? "O"
                        : job.id === "teradata"
                          ? "t."
                          : "a"}
                    </span>
                    <span className="career-company">
                      <strong>{job.fullCompany}</strong>
                      <span>
                        {job.role}
                        {job.current && <i>Current</i>}
                      </span>
                    </span>
                    <span className="career-period">{job.period}</span>
                    <span className="career-expand">
                      <Icon name="plus" />
                    </span>
                  </summary>
                  <div className="career-details">
                    <div>
                      <p className="career-summary">{job.summary}</p>
                      <ul>
                        {job.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="tag-list">
                        {job.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <p className="career-location">
                        {job.dates} <span>·</span> {job.location}
                      </p>
                    </div>
                    <div className="career-metric">
                      <strong>{job.metric.value}</strong>
                      <span>{job.metric.label}</span>
                      <Icon name="diagonal" />
                    </div>
                  </div>
                </details>
              ))}
            </div>
            <div className="experience-bottom">
              <p>
                <Icon name="star" /> Recognized for building beyond the brief.
              </p>
              <div>
                <span>AI Pinnacle Award</span>
                <i>✳</i>
                <span>AI Ninja Award</span>
                <small>ORACLE CLOUD</small>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section container about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-grid" data-reveal>
            <div className="about-intro">
              <SectionLabel number="03">
                THE PERSON BEHIND THE CODE
              </SectionLabel>
              <h2 id="about-title">
                Curious by nature.
                <br />
                <span className="muted-heading">Engineer by craft.</span>
              </h2>
              <div className="about-person">
                <Image
                  src="/assets/icons/favicon/ABHISHEKPNG.png"
                  alt="Abhishek Jha"
                  width={72}
                  height={72}
                />
                <div>
                  <strong>Abhishek Jha</strong>
                  <span>Engineer. Problem solver. Lifelong learner.</span>
                </div>
                <span className="about-spark" aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>
            <div className="about-story">
              <p>{profile.bio}</p>
              <p>{profile.about}</p>
              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                The full story, on paper <Icon name="down" />
              </a>
            </div>
          </div>
          <div className="capabilities-grid" data-reveal>
            {capabilities.map((capability, index) => (
              <article className="capability" key={capability.id}>
                <div className="capability-top">
                  <Icon name={["code", "cloud", "layers", "terminal"][index]} />
                  <span>{capability.number}</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="skill-list">
                  {capability.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="education-strip" data-reveal>
            <span className="education-icon">
              <Icon name="star" />
            </span>
            <div>
              <p>STRONG FOUNDATIONS</p>
              <strong>{profile.education.degree}</strong>
              <span>
                {profile.education.institution} · {profile.education.period}
              </span>
            </div>
            <div className="education-score">
              <strong>
                9.3<span>/10</span>
              </strong>
              <span>CGPA</span>
            </div>
            <span className="education-badge">
              <Icon name="star" /> Gold medalist
            </span>
          </div>
        </section>
        <section
          className="testimonial-section"
          aria-label="Colleague recommendations"
        >
          <div className="container testimonial-layout">
            <div className="testimonial-label">
              <p className="eyebrow">BETTER TOGETHER</p>
              <h2>A few kind words.</h2>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
            </div>
            <div
              className="testimonial-content"
              aria-live="polite"
              aria-atomic="true"
            >
              <blockquote key={quoteIndex}>“{quote.quote}”</blockquote>
              <div className="testimonial-bottom">
                <div className="quote-author">
                  <Image src={quote.image} alt="" width={44} height={44} />
                  <div>
                    <strong>{quote.name}</strong>
                    <span>
                      {quote.role} · {quote.company}
                    </span>
                  </div>
                </div>
                <div className="quote-controls">
                  <span>
                    0{quoteIndex + 1}
                    <i>/ 0{testimonials.length}</i>
                  </span>
                  <button
                    className="icon-button"
                    aria-label="Previous recommendation"
                    onClick={() =>
                      setQuoteIndex(
                        (quoteIndex + testimonials.length - 1) %
                          testimonials.length,
                      )
                    }
                  >
                    <Icon className="rotate-arrow" />
                  </button>
                  <button
                    className="icon-button"
                    aria-label="Next recommendation"
                    onClick={() =>
                      setQuoteIndex((quoteIndex + 1) % testimonials.length)
                    }
                  >
                    <Icon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section container writing-section"
          id="writing"
          aria-labelledby="writing-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel number="04">THINKING OUT LOUD</SectionLabel>
              <h2 id="writing-title">
                Learn. Build.
                <br />
                <span className="muted-heading">Write it down.</span>
              </h2>
            </div>
            <div className="writing-heading-aside">
              <p>
                Notes from the workbench. Sharing what I learn about systems,
                cloud, and better software.
              </p>
              <a
                href={profile.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                All 30+ articles on Medium <Icon name="diagonal" />
              </a>
            </div>
          </div>
          <div className="article-list">
            {writing.slice(0, 3).map((article, index) => (
              <a
                className="article-row"
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                key={article.id}
              >
                <span className="article-number">0{index + 1}</span>
                <span className="article-info">
                  <span>{article.category}</span>
                  <h3>{article.title}</h3>
                </span>
                <span className="article-platform">
                  STACKADEMIC <span>↗</span>
                </span>
                <span className="article-arrow">
                  <Icon name="diagonal" />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="contact-top">
              <p className="eyebrow">
                <span className="status-dot" /> GOOD THINGS START WITH A
                CONVERSATION
              </p>
              <span className="contact-asterisk" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">
                Have something
                <br />
                in mind? <span>Let’s build it.</span>
              </h2>
              <a
                className="contact-big-arrow"
                href={`mailto:${profile.email}`}
                aria-label="Email Abhishek Jha"
              >
                <Icon name="diagonal" />
              </a>
            </div>
            <div className="contact-bottom">
              <div className="contact-email">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button
                  className="icon-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <Icon
                    name={copyStatus === "Email copied!" ? "check" : "copy"}
                  />
                </button>
                <span className="copy-status" role="status">
                  {copyStatus}
                </span>
              </div>
              <div className="contact-socials">
                {profile.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <Icon name="diagonal" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <p>© {new Date().getFullYear()} Abhishek Jha</p>
        <span>Made with intention. Built with care.</span>
        <a href="#home">
          Back to top <span>↑</span>
        </a>
      </footer>
      <WorkDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
