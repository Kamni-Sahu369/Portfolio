import React from 'react';
import './Education.css';
import { FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section reveal-up">
      <div className="education-header">
        <h2>My Education Journey</h2>
        <p>Learning and growing through the years</p>
      </div>

      <div className="education-container">

        {/* High School */}
        <div className="education-card highschool">
          <span className="edu-year">2018 - 2020</span>
          <h3 className="edu-degree">High School</h3>
          <div className="edu-institute"><FaSchool />NVM School, Raipur</div>
          <p className="edu-desc">
            Completed Higher Secondary Education with Science and Mathematics.
          </p>
        </div>

        {/* Bachelor's Degree */}
        <div className="education-card bachelors">
          <span className="edu-year">2020 - 2023</span>
          <h3 className="edu-degree">Bachelor's Degree</h3>
          <div className="edu-institute"> <FaSchool />Pt.Ravishankar Sukla University, Raipur</div>
          <p className="edu-desc">
            B.Sc. in Mathematics.
          </p>
        </div>

        {/* Master's Degree */}
        <div className="education-card masters">
          <span className="edu-year">2023 - 2025</span>
          <h3 className="edu-degree">Master's Degree</h3>
          <div className="edu-institute"> <FaSchool />Pt.Ravishankar Sukla University, Raipur</div>
          <p className="edu-desc">
            M.sc in Information Technology.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;