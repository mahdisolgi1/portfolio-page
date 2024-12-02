import { useForm, ValidationError } from "@formspree/react";
import styles from "./Form.module.css";

function Form() {
  const [state, handleSubmit] = useForm("mrbgzbdb");
  if (state.succeeded) {
    return (
      <p style={{ textAlign: "center", fontSize: "4rem" }}>email sent ✔✔</p>
    );
  }

  return (
    <>
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
    </>
  );
}
export default Form;
