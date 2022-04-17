import type { NextPage } from "next";
import Head from "next/head";
import { SingletonRouter, withRouter } from "next/router";
import Header from "../components/header";

interface Props {
  router?: SingletonRouter;
}

const Success: NextPage = (props: Props) => (
  <>
    <Head>
      <title>Rock Paper Coin - Success</title>
    </Head>

    <Header />

    <main>
      Success!
      <div>
        EMAIL: {props?.router?.query.email} PASSWORD:{" "}
        {props?.router?.query.password}
      </div>
    </main>
  </>
);

export default withRouter(Success);
