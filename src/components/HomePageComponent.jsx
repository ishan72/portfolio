import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen h-screen bg-paleMintGreen text-gray-600 flex flex-col justify-center">
      <div className="mx-auto w-11/12 text-center">
        <p className="sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-wider lg:pb-4">
          Hello, I'm Ishan Dahal.
        </p>
        <p className="sm:text-lg md:text-xl lg:text-3xl">
          Front-end Developer | Programmer
        </p>
        <div className="pt-8">
          <div className="inline cursor-pointer border border-gray-600 py-3 px-4 lg:py-4 lg:px-8 rounded-full text-2xl hover:bg-white hover:text-black hover:border-white">
            More on me...
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
