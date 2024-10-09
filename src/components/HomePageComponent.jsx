import React from "react";
import NavSection from "./sections/NavSection";
import HeroSection from "./sections/HeroSection";

function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-tl from-white via-green-400 to-white">
      <div className="h-full flex justify-center items-center">
        <div className="w-11/12 h-4/5 box">
          <div className="z-10 h-full w-full p-4">
            <NavSection />
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
