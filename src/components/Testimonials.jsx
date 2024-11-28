import { projectRecommendations } from "../data/data";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <>
      <div className={styles.testimonialNavtext}>
        <h2 id="testimonoals" className={"secondary-heading  text-center"}>
          Testiomonials
        </h2>
        <p className={"subheading add-margin text-center"}>
          See the testiomonials for me
        </p>
      </div>
      <div className={styles.tesimonialBox}>
        {projectRecommendations.map((index) => (
          <div className={styles.tesimonial} key={index.id}>
            <div className={styles.imgBoxEmptyProfile}>
              <img
                className={styles.imgEmptyProfil}
                src={index.image}
                alt="empty-profile"
              />
            </div>
            <p className={styles.recommandedBy}>
              {index.name}
              <br /> ({index.role})
            </p>
            <blockquote className={styles.blockquote}>{index.text}</blockquote>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
