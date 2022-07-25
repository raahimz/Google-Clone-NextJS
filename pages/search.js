import Head from "next/head";
import SearchHeader from "../components/Search/Header/SearchHeader";
import SearchResults from "../components/Search/Results/SearchResults";
import MockData from "../MockData";
import { useRouter } from "next/router";

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Googly Search</title>
      </Head>

      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;

  const data = mockData
    ? MockData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${context.query.startIndex || "1"}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
