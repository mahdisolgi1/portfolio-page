import { useState } from "react";
import { skills } from "../data/data";
import styles from "./Skills.module.css";

function Skills() {
  const [viewAll, setViewAll] = useState(false);
  return (
    <>
      <div className={styles.skillsIntro}>
        <h2 id="skills" className="secondary-heading text-center">
          Skills
        </h2>
        <p className="subheading text-center">The skills that I can provide</p>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {skills.slice(0, viewAll ? skills.length : 5).map((skill) => (
            <div className={styles.skill} key={skill.id}>
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
