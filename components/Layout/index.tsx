import { AdjustmentsIcon, CogIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import React from "react";

import { IconMenu, SearchBar } from "..";

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen font-sans font-light bg-white">
      {/* menu bar */}
      <div className="flex items-center fixed z10 w-full bg-indigo-500 inset-x-0 px-3 py-2 h-15">
        <div className="flex w-1/2 text-white items-center">
          <div className="pr-3">qbase</div>
          <div className="px-3">
            <IconMenu icon={<PlusIcon className="w-6 h-6" />} />
          </div>
          <div className="px-3 w-full">
            <SearchBar />
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="flex w-1/2 text-white justify-end">
          <IconMenu icon={<AdjustmentsIcon className="w-6 h-6" />} />
        </div>
      </div>
      <div className="bg-indigo-50 w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
