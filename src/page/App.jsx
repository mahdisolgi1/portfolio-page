import { useState } from "react";

import { projectRecommendations, skills, services } from "../data/data";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <Header />

      <main>
        <div className="skills-intro">
          <h2 id="skills" className="secondary-heading text-center">
            Skills
          </h2>
          <p className="subheading text-center">
            The skills that I can provide
          </p>
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
        <div className="testimonial-Nav-text">
          <h2 id="testimonoals" className="secondary-heading text-center">
            Testiomonials
          </h2>
          <p className=" subheading add-margin text-center">
            See the testiomonials for me
          </p>
        </div>
        <div className="tesimonial-box">
          {projectRecommendations.map((index) => (
            <div className="tesimonial" key={index.id}>
              <div className="img-box-empty-profile">
                <img
                  className="img-empty-profile"
                  src={index.image}
                  alt="empty-profile"
                />
              </div>
              <p className="recommandedBy">
                {index.name}
                <br /> ({index.role})
              </p>
              <blockquote className="blockquote">{index.text}</blockquote>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
