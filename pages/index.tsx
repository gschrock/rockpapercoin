import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import LoginForm from "../components/loginForm";
import styles from "../styles/Login.module.scss";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Coin - Login</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
