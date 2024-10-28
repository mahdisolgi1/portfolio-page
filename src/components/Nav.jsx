/* eslint-disable react/prop-types */
import { useState } from "react"; // Import useState for managing state
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ anchors, button }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu
  };
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isUsedInForm = (!anchors || anchors.length === 0) && !!button;

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
      {/* Logo */}
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
        {anchors &&
          anchors.map((anchor) => (
            <li className={styles.link_items} key={anchor.id}>
              <a href={`#${anchor.id}`}>{anchor.name}</a>
            </li>
          ))}
        {button && (
          <li
            className={
              !isUsedInForm ? styles.link_items : styles.link_items_form
            }
          >
            <Link
              className={!isUsedInForm ? styles.talk_btn : styles.talk_btn_form}
              to={button.buttonTo}
            >
              {button.buttonLabel}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
