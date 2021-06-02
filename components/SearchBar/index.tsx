import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = () => {
  return (
    <div className="flex w-full items-center bg-indigo-300 px-3 rounded">
      <SearchIcon className="w-4 h-4 text-sm" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-full text-white font-semibold placeholder-white  text-sm px-1 py-2 outline-none ring-0 border-none focus:ring-0 focus:border-none"
      />
    </div>
  );
};

export default SearchBar;
