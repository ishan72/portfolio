import React, { useState } from "react";
import DetailProjectComponent from "./DetailProjectComponent";

function ProjectComponent() {
  const [showAbsoluteClass, setShowAbsoluteClass] = useState(false);
  const [showId, setShowId] = useState("");
  const [seeDetailIsOn, setSeeDetailIsOn] = useState(false);
  return (
    <>
      <div className="bg-color4 h-4/5 text-white">
        {!seeDetailIsOn ? (
          <div className="flex flex-col item-center justify-center h-full">
            <div className="w-4/5 mx-auto">
              <div className="">
                <p className="text-4xl font-arapey">Projects</p>
              </div>

              <div className="w-full pt-2 text-white flex flex-col items-center space-y-12 md:space-y-0 md:flex-row justify-center md:space-x-40">
                <div
                  className="transition duration-300 ease-out relative h-32 w-36 md:h-40 rounded-xl bg-gray-500  hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center text-center"
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
                      showAbsoluteClass && showId === "1"
                        ? "text-lg md:text-xl pt-2"
                        : "text-xl"
                    }`}
                  >
                    Landing Page
                  </p>
                  {showAbsoluteClass && showId === "1" && (
                    <div
                      onClick={() => setSeeDetailIsOn(true)}
                      className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center cursor-pointer"
                    >
                      <p className="">View</p>
                    </div>
                  )}
                </div>
                <div
                  className="transition duration-300 ease-out relative w-36 h-32 md:h-40 rounded-xl bg-gray-500 hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center text-center"
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
                      showAbsoluteClass && showId === "2"
                        ? "text-lg md:text-xl pt-2"
                        : "text-xl"
                    }`}
                  >
                    React JS
                  </p>
                  {showAbsoluteClass && showId === "2" && (
                    <div
                      onClick={() => setSeeDetailIsOn(true)}
                      className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center cursor-pointer"
                    >
                      <p className="">View</p>
                    </div>
                  )}
                </div>
                <div
                  className="transition duration-300 ease-out relative w-36 h-32 md:h-40 rounded-xl bg-gray-500 hover:bg-gray-900 flex flex-col hover:flex-row item-center justify-center text-center"
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
                      showAbsoluteClass && showId === "3"
                        ? "text-lg md:text-xl pt-2"
                        : "text-xl"
                    }`}
                  >
                    React & Python
                  </p>
                  {showAbsoluteClass && showId === "3" && (
                    <div
                      onClick={() => setSeeDetailIsOn(true)}
                      className="absolute transition duration-150 ease-in top-1/2 h-20 w-full border-t border-dashed border-black bg-slate-500 rounded-b-xl flex flex-col item-center justify-center cursor-pointer"
                    >
                      <p className="">View</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DetailProjectComponent
            setSeeDetailIsOn={setSeeDetailIsOn}
            setShowAbsoluteClass={setShowAbsoluteClass}
            showId={showId}
          />
        )}
      </div>
    </>
  );
}

export default ProjectComponent;
