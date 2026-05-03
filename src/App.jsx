import React, { useEffect } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Project'
import Education from './components/Education'
import Skills from './components/Skills'
import Contect from './components/Contect'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-container">
      {/* Background Half Circle Glow */}
      <div className="bg-glow"></div>

      {/* Glassmorphism Header */}
      <header className="glass-header">
        <div className="logo">kamni</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right-placeholder"></div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <h1 className="hero-title">Hi, I'm Kamini Sahu</h1>
        <p className="hero-desc">
          A passionate Full Stack Developer with 1 year of hands-on experience building responsive and scalable web applications. I specialize in crafting seamless user experiences on the frontend while ensuring robust and efficient backend solutions.
        </p>
        <p className="hero-desc">
          I believe in writing clean code, solving real-world problems, and continuously growing as a developer. Let's build something amazing together.
        </p>
        <div className="hero-buttons">
                   <a href="/resume/Kamini_Resume.pdf" download="Kamini_Resume.pdf" className="btn-primary">
  Download Resume
</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </main>

      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contect />
    </div>
  )
}

export default App
