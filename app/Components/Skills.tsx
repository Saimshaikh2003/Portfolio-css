import React from 'react';
import "../styles/skill.css";

const Skills = () => {
  return (
    <div id="skills" className="skills container">
        <div className="skills-grid">
            <div data-aos="zoom-in-up" className="skills-left">
                <h2 className="skills-heading" data-aos="zoom-in-up">Technologies I work With</h2>
                <p className="skills-text">
                  I have foundation in web development, specialization in HTML, CSS , Javascript. My experience extends to using framework like and next.js to create  dynamic & user-friendly application. im  also proficient in Tailwind Css  for efficient styling and design. with a position for learning, I  stay updated on the latest technologies to enhance my skill set and contribute effectively to project. </p>
            </div>
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
            <h2 data-aos="fade-down">Typescript</h2>
            <h2 data-aos="fade-down">Node js</h2>
            <h2 data-aos="fade-down">Next js</h2>
          </div>

          <div className="skills-space">
            <h2 data-aos="fade-down">Tailwind</h2>
            <h2 data-aos="fade-down">Css</h2>
            <h2 data-aos="fade-down">Node js</h2>
              </div>
            </div>
       </div>
    </div>
  </div>
  );
};

export default Skills;
