import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home({ providers }) {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    if (searchInput) {
      const term = searchInput.trim();
      if (term === "") return;
      router.push(`/search?term=${term}&searchType=`);
    }
  };

  return (
    <div>
      <Head>
        <title>Googly</title>
        <meta name="description" content="A clone of google" />
      </Head>

      <Header
        signIn={() => {
          signIn(providers.google.id, { callbackUrl: "/" });
        }}
      />

      <form className="flex flex-col items-center mt-52">
        <Image
          src={
            "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          width="300"
          height="100"
          objectFit="cover"
        />

        <div className="flex flex-row w-[90%] sm:max-w-xl items-center mt-5 border rounded-full px-4 py-2 gap-3 hover:shadow-md focus-within:shadow-md">
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            className="flex-grow focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {searchInput !== "" && (
            <div
              className="text-gray-500 hover:cursor-pointer"
              onClick={() => setSearchInput("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          {searchInput !== "" && (
            <div className="bg-gray-300 w-[1px] self-stretch" />
          )}

          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
