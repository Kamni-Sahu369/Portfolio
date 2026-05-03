import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section reveal-up">
      {/* Background Half Circle Glow (Right Side) */}
      <div className="bg-glow experience-glow"></div>
      
      <div className="experience-header">
        <h2>Experience</h2>
        <p>My professional journey and the projects I've built.</p>
      </div>

      <div className="timeline-container">
        
        {/* Job */}
        <div className="timeline-item">
          <div className="timeline-node blue-node"></div>
          <div className="timeline-content timeline-card">
            <div className="role-header">
              <h3>Web Developer</h3>
              <span className="duration-badge">🕐 4 Months</span>
            </div>
            
            <div className="company-meta">
              <span className="company-name">Charvi Infotech Private Limited</span>
              <span className="timeline-date">📅 January 2026 – April 2026</span>
            </div>

            <p className="role-desc">
              Worked as a professional developer contributing to real-world client projects using PHP & Laravel, delivering scalable and efficient web solutions across multiple domains. Successfully worked on projects including <strong>Kapda</strong> (retail management platform), <strong>Mahakal Transport</strong> (logistics & transport management system), <strong>Mandi Pro</strong> (agricultural marketplace platform), <strong>Inventory Management System</strong> (end-to-end stock & inventory tracking), and a <strong>School Management System</strong> (student & academic data management).
            </p>

            <div className="tech-stack-container mt-4">
              <span className="tech-pill">PHP</span>
              <span className="tech-pill">Laravel</span>
              <span className="tech-pill">MySQL</span>
              <span className="tech-pill">REST APIs</span>
              <span className="tech-pill">HTML/CSS</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">Node.js</span>
            </div>
          </div>
        </div>

        {/* Internship */}
        <div className="timeline-item">
          <div className="timeline-node purple-node"></div>
          <div className="timeline-content timeline-card">
            <div className="role-header">
              <h3>Full Stack Web Dev Intern</h3>
              <span className="duration-badge">🕐 1 Year</span>
            </div>
            
            <div className="company-meta">
              <span className="company-name">Yashvi Take Private Limited</span>
              <span className="timeline-date">📅 November 2024 – November 2025</span>
            </div>

            <p className="role-desc">
              During my one-year internship, I built a strong foundation in core web technologies — HTML, CSS, JavaScript & Django — and applied these skills hands-on by contributing to real-world company projects, working in a professional team environment, understanding client requirements, and delivering production-ready solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
