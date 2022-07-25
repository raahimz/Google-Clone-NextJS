import parse from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="px-6 md:pl-[11rem] pl-[1.5rem] max-w-4xl">
      <p className="text-gray-500 text-sm mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      <div className="mt-6 flex flex-col gap-8">
        {results.items.map((result) => (
          <div key={result.link}>
            <a href={result.link} className="group">
              <p className="text-sm text-gray-900 truncate">
                {result.formattedUrl}
              </p>
              <h2 className="text-lg text-blue-800 group-hover:underline">
                {result.title}
              </h2>
            </a>
            <p className="text-gray-600">{parse(result.htmlSnippet)}</p>
          </div>
        ))}
      </div>
      <PaginationButtons />
    </div>
  );
}
