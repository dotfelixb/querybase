import React from "react";

interface IIconMenuProps {
  icon: JSX.Element;
}

const IconMenu: React.FC<IIconMenuProps> = ({ icon }) => {
  return (
    <div className=" box-border bg-transparent px-2 py-1 cursor-pointer rounded hover:bg-indigo-600 hover:shadow">
      {icon}
    </div>
  );
};

export default IconMenu;
