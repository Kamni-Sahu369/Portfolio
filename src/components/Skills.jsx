import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/60A5FA', class: 'html' },
  { name: 'CSS', icon: 'data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="%2360A5FA"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>', class: 'css' },
  { name: 'JavaScript (ES6+)', icon: 'https://cdn.simpleicons.org/javascript/60A5FA', class: 'js' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/60A5FA', class: 'react' },
  { name: 'Django', icon: 'https://cdn.simpleicons.org/django/60A5FA', class: 'django' },
  { name: 'SQLite3', icon: 'https://cdn.simpleicons.org/sqlite/60A5FA', class: 'sqlite' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/60A5FA', class: 'git' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/60A5FA', class: 'github' },
  { name: 'RESTful APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative/60A5FA', class: 'api' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/60A5FA', class: 'node' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/60A5FA', class: 'vercel' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/60A5FA', class: 'postman' },
  { name: 'Render', icon: 'https://cdn.simpleicons.org/render/60A5FA', class: 'render' },
  { name: 'Neon', icon: 'https://cdn.simpleicons.org/postgresql/60A5FA', class: 'neon' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section reveal-up">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.class}`}>
            <div className="skill-icon-box">
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;