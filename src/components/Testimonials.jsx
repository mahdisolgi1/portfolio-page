import { projectRecommendations } from "../data/data";

function Testimonials() {
  return (
    <>
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
    </>
  );
}

export default Testimonials;
