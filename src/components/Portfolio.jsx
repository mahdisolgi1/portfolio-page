import { services } from "../data/data";

function Portfolio() {
  return (
    <>
      <h2 id="portfolio" className="secondary-heading text-center">
        portfolios
      </h2>
      <p className="subheading text-center">
        See the services that i can provide
      </p>
      <div className="porfolio-container">
        {services.map((skill) => (
          <div key={skill.id} className="porfolio">
            {/* icon */}
            <h3 className="portfolio-heading">{skill.name}</h3>
            <p className="portfolio-proficiency">({skill.proficiency})</p>
            <p className="portfolio-text">{skill.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
