import type { NextPage } from "next";
import Head from "next/head";
import grammar from "../grammar/grammar";

const Home: NextPage = () => {
  const nearley = require("nearley");

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse something!
  parser.feed("foo\n");

  // parser.results is an array of possible parsings.
  console.log(JSON.stringify(parser.results)); //

  return (
    <>
      <Head>
        <title>jsParser</title>
      </Head>
      <div className="text-center text-3xl p-10 font-bold">
        Welcome to jsParser
      </div>
    </>
  );
};

export default Home;
