import { useRouter } from "next/router";

const IconAll = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
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
  );
};

const IconImages = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

const MenuButton = ({ isSelected, title, icon }) => {
  const router = useRouter();

  return (
    <button
      className={`flex flex-row justify-center items-center gap-1 select-none pb-[8px] text-md text-${
        isSelected ? "blue" : "gray"
      }-500 ${isSelected && "border-b-[3px] border-b-blue-500 pb-[4.5px]"}`}
      onClick={() => {
        router.push(
          `/search?term=${router.query.term}&searchType=${
            title === "Images" ? "image" : ""
          }`
        );
      }}
    >
      {icon}
      {title}
    </button>
  );
};

export default function SearchHeaderMenu() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-6 pt-6 border-b  sm:pl-[11rem] pl-[1.5rem]">
      <MenuButton
        title="All"
        icon={<IconAll />}
        isSelected={
          router.query.searchType === "" || !router.query.searchType
            ? true
            : false
        }
      />
      <MenuButton
        title="Images"
        icon={<IconImages />}
        isSelected={router.query.searchType === "image" ? true : false}
      />
    </div>
  );
}
