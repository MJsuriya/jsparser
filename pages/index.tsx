import type { NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jsParser</title>
      </Head>
      <div className="text-center text-3xl p-10 font-bold">
        Welcome to jsParser
        <Filter></Filter>
      </div>
    </>
  );
};

export default Home;
