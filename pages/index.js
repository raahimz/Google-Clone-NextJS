import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Googly</title>
        <meta name="description" content="A clone of google" />
      </Head>

      <Header />
    </div>
  );
}
