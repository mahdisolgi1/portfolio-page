import styles from "./Footer.module.css";
const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo} onClick={scrollToTop}>
        M.S.Dev
      </div>

      <ul className={`${styles.footer} ${styles.links}`}>
        <li>
          <a href="https://instagram.com/yourusername" target="_blank">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/mahdi-solgi" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/mahdisolgi1" target="_blank">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="mailto:mahdi.solgi.dev@gmail.com">
            <i className="fas fa-envelope"></i> Gmail
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
