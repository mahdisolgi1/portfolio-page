import { Link } from "react-router-dom";
import Nav from "./Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.headerDetails}>
          <div className={styles.headerDetailsText}>
            <div className={styles.header}>
              <h1 className={styles.primaryHeading}>
                Hi, I&apos;m Mahdi Solgi
              </h1>
              <p className={styles.primaryP}>
                I turn ideas into interactive and responsive web experiences.
              </p>
            </div>
            <ul className={styles.skillsList}>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <Link className="talk-btn" to="/form">
              Let&apos;s Talk
            </Link>
          </div>
          <div className={styles.headerDetailsImgBox}>
            <img src="my-img.jpg" alt="my image" className={styles.headerImg} />
          </div>
        </div>
      </div>
      <div className={styles.previewSkills}>
        <ul className={styles.skills}>
          <li className={styles.skill}>React</li>
          <li className={styles.skill}>CSS</li>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>html</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
