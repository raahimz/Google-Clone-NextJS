import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import User from "./User";
import { getProviders, signIn } from "next-auth/react";
import SearchHeaderMenu from "./SearchHeaderMenu";

export default function SearchHeader({ providers }) {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setSearchInput(router.query.term);
    }
  }, [router.isReady]);

  const search = (e) => {
    e.preventDefault();

    const term = searchInput.trim();
    if (term === "") return;
    router.push(`/search?term=${term}&searchType=`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between gap-4 px-2 sm:px-8 pt-6">
        <form className="flex items-center gap-5 sm:gap-10">
          <Image
            className="cursor-pointer"
            onClick={() => router.push("/")}
            src={
              "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
            width="100"
            height="35"
            layout="fixed"
            objectFit="contain"
          />
          <div className="flex flex-row lg:w-[700px] md:w-[500px] sm:w-[400px] items-center border rounded-full px-2 sm:px-4 py-2 gap-3 hover:shadow-md focus-within:shadow-md">
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
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

            <button className="text-blue-500" onClick={search}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
            </button>
          </div>
        </form>
        <User
          signIn={() => {
            signIn(providers, { callbackUrl: window.location.href });
          }}
        />
      </div>
      <SearchHeaderMenu />
    </header>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
