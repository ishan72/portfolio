import React from "react";
import { Link } from "react-scroll";

function NavSection() {
  return (
    <>
      <ul className="text-text1 list-none flex justify-end space-x-4 cursor-pointer lg:text-xl xl:text-2xl 2xl:text-3xl">
        <Link to="home" smooth={true} duration={500}>
          <li className="border-b-4 border-borderColor">Home</li>
        </Link>
        <Link to="skills" smooth={true} duration={1000}>
          <li className="hover:border-b-4 hover:border-white">Skills</li>
        </Link>
        <Link to="projects" smooth={true} duration={2000}>
          <li className="hover:border-b-4 hover:border-white">Projects</li>
        </Link>
      </ul>
    </>
  );
}

export default NavSection;
