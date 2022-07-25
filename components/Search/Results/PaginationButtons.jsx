import { useRouter } from "next/router";

const IconLeftArrow = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    </div>
  );
};

const IconRightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
};

const PaginationButton = ({ Icon, Increment, Title }) => {
  const router = useRouter();

  const handleClick = () => {
    const startIndex = Number(router.query.start) || 1;

    router.push(
      `/search?term=${router.query.term}&searchType=${
        router.query.searchType
      }&start=${startIndex + Increment}`
    );
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center text-blue-600 hover:underline"
    >
      <Icon />

      {Title}
    </button>
  );
};

export default function PaginationButtons() {
  const router = useRouter();
  const pageIndex = router.query.start || 1;
  return (
    <div className="flex flex-row justify-center gap-10 mt-10">
      {pageIndex >= 11 && (
        <PaginationButton Icon={IconLeftArrow} Increment={-10} Title={"Prev"} />
      )}

      {pageIndex < 91 && (
        <PaginationButton Icon={IconRightArrow} Increment={10} Title={"Next"} />
      )}
    </div>
  );
}
