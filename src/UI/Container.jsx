import React from "react";

function Container({ index, title, children }) {
  return (
    <div
      className={`min-h-screen ${
        index % 2 === 0
          ? "bg-gradient-to-bl from-white via-green-400 to-white"
          : "bg-gradient-to-tl from-white via-green-400 to-white"
      }`}
    >
      <div className="min-h-screen h-full flex flex-col justify-center items-center">
        <div>
          <p className="text-4xl italic">{title}</p>
        </div>
        <div className="flex-1 bg-black h-full w-full">
          <div className="h-full flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
