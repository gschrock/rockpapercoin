import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Login.module.scss";

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock Paper Coin - Success</title>
      </Head>

      <Header />

      <main className={styles.main}>Success!</main>
    </>
  );
};

export default Success;
