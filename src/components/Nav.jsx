import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const anchors = [
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Portfolios",
    id: "portfolio",
  },
  {
    name: "Testimonoals",
    id: "testimonoals",
  },
];

function Nav() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    if (isUsedInHome) {
      setMobileMenuOpen(!isMobileMenuOpen);
    }
  };
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isUsedInForm = location.pathname === "/form";
  const isUsedInHome = location.pathname === "/home";

  return (
    <nav className={styles.navbar}>
      {isUsedInForm ? (
        <Link to="/" className={styles.logo}>
          M.S.Dev
        </Link>
      ) : (
        <div className={styles.logo} onClick={scrollToTop}>
          M.S.Dev
        </div>
      )}

      {!isUsedInForm && (
        <div
          className={`${styles.container} ${
            isMobileMenuOpen ? styles.change : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      )}
      <ul
        className={`${
          !isUsedInForm
            ? `${styles.links} ${isMobileMenuOpen ? styles.change : ""}`
            : ""
        }`}
        onClick={toggleMobileMenu}
      >
        {location.pathname == "/home" &&
          anchors.map((anchor) => (
            <li className={styles.link_items} key={anchor.id}>
              <a href={`#${anchor.id}`}>{anchor.name}</a>
            </li>
          ))}
        <li
          className={!isUsedInForm ? styles.link_items : styles.link_items_form}
        >
          <Link
            className={!isUsedInForm ? styles.talk_btn : styles.talk_btn_form}
            to={isUsedInHome ? "/form" : "/"}
          >
            {isUsedInHome ? "Let's Talk" : "Home"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
