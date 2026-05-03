import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

  return (
    <section id="about" className="about-section reveal-up">
      <div className="about-header">
        <h2>About Me</h2>
        <p>Get to know who I am, what I do, and what drives me.</p>
      </div>

      <div className="bento-grid-two">
        {/* Card 1: Intro & Background */}
        <div className="bento-card card-intro-new">
          <div className="card-content">
            <div className="section-title">
              <span className="icon-glow"></span>
              <h3>Who I Am</h3>
            </div>
            <p className="lead-text">
              I'm a results-driven Full-Stack Developer with hands-on experience building scalable web applications across diverse domains including HR, healthcare, inventory, and enterprise portals.
            </p>
            <p>
              Proficient in React.js, Next.js, Django, Node.js, and modern cloud deployment workflows. Adept at translating business requirements into clean, maintainable code and delivering production-ready solutions in fast-paced environments.
            </p>

            <div className="section-title mt-4">
              <span className="icon-glow purple"></span>
              <h3>Passion & Goals</h3>
            </div>
            <p>
              I'm driven by curiosity and collaboration. I thrive in both solo and team environments, and I believe great software should feel effortless — for the user and the developer maintaining it.
            </p>
          </div>
        </div>

        {/* Card 2: What I Do */}
        <div className="bento-card card-what-new">
          <div className="card-content">
            <div className="section-title">
              <span className="icon-glow blue"></span>
              <h3>What I Do</h3>
            </div>
            <ul className="skills-list-new">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Build full-stack web applications end-to-end
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Design responsive, mobile-first user interfaces
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Develop secure REST APIs & backend systems
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Manage databases — SQL & SQLITE3
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
