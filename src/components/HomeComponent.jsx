import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import Resume from "../assets/Resume.pdf";

function HomeComponent() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <div className="font-arapey">
        <p className="text-4xl">Hello!!</p>
        <p className="text-3xl">It's me Ishan.</p>
        <p className="text-2xl">
          I am software developer,
          <br />
          specializing in frontend development.
        </p>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="btn w-full rounded-full bg-blue-500 px-2 py-2 hover:bg-sky-700"
        >
          <a
            href={Resume}
            className="w-full"
            download="Ishan's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex  items-center justify-center">
              <AiFillFilePdf size="1em" />
              <p className="ml-2">Download CV</p>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;
