import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import MockData from "../MockData";

export default function Search({ results }) {
  return (
    <div>
      <Head>
        <title>fasdfs - Googly Search</title>
      </Head>

      <SearchHeader />
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
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
