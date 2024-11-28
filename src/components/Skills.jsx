import { useState } from "react";
import { skills } from "../data/data";

function Skills() {
  const [viewAll, setViewAll] = useState(false);
  return (
    <>
      <div className="skills-intro">
        <h2 id="skills" className="secondary-heading text-center">
          Skills
        </h2>
        <p className="subheading text-center">The skills that I can provide</p>
      </div>
      <div className="skills-container">
        <div className="skills">
          {skills.slice(0, viewAll ? skills.length : 5).map((skill) => (
            <div className="skill" key={skill.id}>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => setViewAll(!viewAll)} className="btn-all">
            {viewAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Skills;
