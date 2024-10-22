import React from "react";

function Container({ index, title, children }) {
  return (
    <div
      className={`min-h-screen h-full flex flex-col justify-center items-center space-y-20 ${
        index % 2 === 0
          ? "bg-gradient-to-bl from-white via-green-400 to-white"
          : "bg-gradient-to-tl from-white via-green-400 to-white"
      }`}
    >
        <div className="">
          <p className="text-4xl italic">{title}</p>
        </div>
          <div className="h-full flex justify-center items-center">
            {children}
          </div>
    </div>
  );
}

export default Container;
