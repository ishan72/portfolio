import React, { useState } from "react";

function ProjectComponent() {
  const [showAbsoluteClass, setShowAbsoluteClass] = useState(false);
  const [showId, setShowId] = useState("");
  return (
    <div className="bg-color4 h-4/5 text-white flex flex-col item-center justify-center">
      <div className="w-4/5 mx-auto">
        <div className="pb-16">
          <p className="text-4xl font-arapey">Projects</p>
        </div>

        <div className="flex flex-row justify-center space-x-40">
          <div
            className="transition duration-300 ease-out relative w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center cursor-pointer text-center"
            onMouseEnter={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("1");
            }}
            onMouseLeave={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("");
            }}
          >
            <p
              className={`transition duration-150 ${
                showAbsoluteClass ? "text-xl pt-2" : "text-2xl"
              }`}
            >
              HTML,CSS projects
            </p>
            {showAbsoluteClass && showId === "1" && (
              <div className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center">
                <p className="">View</p>
              </div>
            )}
          </div>
          <div
            className="transition duration-300 ease-out relative w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center cursor-pointer text-center"
            onMouseEnter={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("2");
            }}
            onMouseLeave={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("");
            }}
          >
            <p
              className={`transition duration-150 ${
                showAbsoluteClass ? "text-xl pt-2" : "text-2xl"
              }`}
            >
              React projects
            </p>
            {showAbsoluteClass && showId === "2" && (
              <div className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center">
                <p className="">View</p>
              </div>
            )}
          </div>
          <div
            className="transition duration-300 ease-out relative w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center cursor-pointer text-center"
            onMouseEnter={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("3");
            }}
            onMouseLeave={() => {
              setShowAbsoluteClass(!showAbsoluteClass);
              setShowId("");
            }}
          >
            <p
              className={`transition duration-150 ${
                showAbsoluteClass ? "text-xl pt-2" : "text-2xl"
              }`}
            >
              React & Python projects
            </p>
            {showAbsoluteClass && showId === "3" && (
              <div className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center">
                <p className="">View</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
