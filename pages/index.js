import Head from "next/head";
import Header from "../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

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

      <form className="flex flex-col items-center mt-52">
        <Image
          src={
            "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          width="300"
          height="100"
          objectFit="cover"
        />

        <div className="flex flex-row w-[90%] sm:max-w-xl items-center mt-5 border rounded-full px-4 py-2 gap-2 hover:shadow-md focus-within:shadow-md">
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input type="text" className="flex-grow focus:outline-none" />

          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-3 mt-8  ">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
