import Head from "next/head";
import Header from "../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function Home({ providers }) {
  return (
    <div>
      <Head>
        <title>Googly</title>
        <meta name="description" content="A clone of google" />
      </Head>

      {Object.values(providers).map((provider) => (
        <Header
          key={provider.name}
          providers={providers}
          signIn={() => {
            signIn(provider.id, { callbackUrl: "/" });
          }}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
