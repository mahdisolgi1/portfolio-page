import { useForm, ValidationError } from "@formspree/react";
import styles from "./Form.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const button = {
  buttonTo: "/",
  buttonLabel: "Home",
};
function Form() {
  const [state, handleSubmit] = useForm("mrbgzbdb");
  if (state.succeeded) {
    return (
      <>
        <Nav button={button} />
        <p style={{ textAlign: "center", fontSize: "4rem" }}>email sent ✔✔</p>;
      </>
    );
  }

  return (
    <>
      <Nav button={button} />
      <div className={styles.container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Your email address
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className={styles.label}>
            Have a word with me
          </label>
          <textarea className={styles.input} id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Form;
