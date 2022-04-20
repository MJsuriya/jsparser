import type { NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jsParser</title>
      </Head>
      <div className="text-3xl p-10 font-bold text-slate-500">
        Don&apos;t wish for it, start search for it.
        <Filter></Filter>
      </div>
    </>
  );
};

export default Home;
