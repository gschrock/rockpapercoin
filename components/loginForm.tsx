import { FunctionComponent } from "react";
import styles from "../styles/Login.module.scss";
import Footer from "./footer";

const LoginForm: FunctionComponent = () => (
  <>
    <div className={styles["login--form-wrapper"]}>
      <h2 className={styles["login--form-header"]}>Welcome back!</h2>
      <p className={styles["login--form-subtext"]}>Sign in and get to it.</p>
      <form className={styles["login--form"]}>
        <div className={styles["login--form-field"]}>
          <div className={styles["login--form-field-label"]}>
            <p>Email</p>
          </div>
          <input
            className={styles["login--form-field-input"]}
            type="text"
            name="email"
            placeholder="Email Address"
            autoComplete="on"
            id="login-field__email"
            value=""
          />
        </div>
        <div className={styles["login--form-field"]}>
          <div className={styles["login--form-field-lable"]}>
            <p>Password</p>
          </div>
          <input
            className={styles["login--form-field-input"]}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="on"
            id="login-field__password"
            value=""
          />
        </div>
        <div className={styles["login--form-password-reset"]}>
          <p className={styles["login--form-password-reset--text"]}>
            Forgot your password?
          </p>
        </div>
        <button className={styles["login--login-button"]} type="submit">
          <div className={styles["login--login-button--content-container"]}>
            <p className={styles["login--login-button--text"]}>Sign In</p>
          </div>
        </button>
      </form>
      <div className={styles["login--link-signup"]}>
        <a className={styles["login--link-signup-anchor"]}>
          Don&apos;t have an account? Create one now!
        </a>
      </div>
    </div>
    <Footer />
  </>
);

export default LoginForm;
