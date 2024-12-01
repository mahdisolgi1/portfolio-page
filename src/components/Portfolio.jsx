import { services } from "../data/data";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <>
      <h2 id="portfolio" className="secondary-heading text-center">
        portfolios
      </h2>
      <p className="subheading text-center">
        See the services that i can provide
      </p>
      <div className={styles.porfolioContainer}>
        {services.map((skill) => (
          <div key={skill.id} className={styles.porfolio}>
            <h3 className={styles.portfolioHeading}>{skill.name}</h3>
            <p className={styles.portfolioProficiency}>({skill.proficiency})</p>
            <p className={styles.portfolioText}>{skill.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
