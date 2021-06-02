import { SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Esc" || evt.key === "Escape") {
        setIsOpen(false);
      }
    });
    return () => {
      document.removeEventListener("keydown", (evt) => {});
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full">
      <div
        onFocus={() => setIsOpen(true)}
        className="relative z-10 flex w-full items-center bg-indigo-300 pl-3 pr-1 rounded"
      >
        <SearchIcon className="w-4 h-4 text-sm text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-full text-white font-semibold placeholder-white  text-sm px-1 py-2 outline-none ring-0 border-none focus:ring-0 focus:border-none"
        />
      </div>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-5 w-full h-full cursor-default"
          tabIndex={-1}
        ></button>
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute w-full h-32 min-h-full bg-white mt-10 rounded shadow`}
      >
        {children}
      </div>
    </div>
  );
};

export default SearchBar;
