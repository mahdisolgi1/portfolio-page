import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>404 - Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
