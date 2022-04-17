import router from "next/router";
import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import styles from "../styles/Login.module.scss";
import Footer from "./footer";

interface IFormState {
  email: string;
  password: string;
}

const LoginForm: FunctionComponent = () => {
  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/success",
      query: { email: formState.email, password: formState.password },
    });
  };

  return (
    <>
      <div className={styles.login__form_wrapper}>
        <h2 className={styles.login__form_header}>Welcome back!</h2>
        <p className={styles.login__form_subtext}>Sign in and get to it.</p>
        <form
          className={styles.login__form}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className={styles.login__form_field}>
            <div className={styles.login__form_field_label}>
              <p>Email</p>
            </div>
            <input
              className={styles.login__form_field_input}
              type="text"
              name="email"
              placeholder="Email Address"
              id="email"
              value={formState.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.login__form_field}>
            <div className={styles.login__form_field_label}>
              <p>Password</p>
            </div>
            <input
              className={styles.login__form_field_input}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={formState.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.login__form_password_reset}>
            <p className={styles.login__form_password_reset__text}>
              Forgot your password?
            </p>
          </div>
          <button
            className={styles.login__login_button}
            type="submit"
            disabled={formState.email === "" || formState.password === ""}
          >
            <div className={styles.login__login_button__content_container}>
              <p className={styles.login__login_button__text}>Sign In</p>
            </div>
          </button>
        </form>
        <div className={styles.login__link_signup}>
          <a className={styles.login__link_signup_anchor}>
            Don&apos;t have an account? Create one now!
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
