import React from "react";

function NavSection() {
  return (
    <>
      <ul className="text-white list-none flex justify-end space-x-4 cursor-pointer lg:text-xl xl:text-2xl 2xl:text-3xl">
        <li className="border-b-4 border-borderColor">Home</li>
        <li>Project</li>
      </ul>
    </>
  );
}

export default NavSection;
