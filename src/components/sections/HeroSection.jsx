import React from "react";
import downloadLogo from "../../assets/logos/download_icon.png";
import checkmarkLogo from "../../assets/logos/checkmark.svg";

function HeroSection() {
  const DownloadPDF = () => {
    return (
      <div>
        <a
          href="https://ishan72.github.io/portfolio/Ishan_Dahal_Resume.pdf"
          download="Ishan_Dahal_Resume"
        >
          <div className="flex cursor-pointer shadow-md py-2 px-4 lg:py-2 lg:px-8 rounded-lg text-2xl bg-button2 hover:bg-gradient-to-r from-orange-600 via-orange-900 to-text1">
            <img src={downloadLogo} alt="Download icon" /> Resume
          </div>
        </a>
      </div>
    );
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="hidden lg:flex flex-col justify-start items-start h-full flex-1">
        <div className="border-2 border-text1 rounded-full relative lg:h-60 lg:w-60 xl:w-80 xl:h-80"></div>
        <div className="bg-borderColor rounded-full absolute lg:w-20 lg:h-20 lg:left-52 top-44 xl:w-24 xl:h-24 xl:left-72"></div>
        <div className="border-4 border-borderColor rounded-full absolute profile-pic top-52 lg:left-44 xl:left-72 w-52 h-52"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start lg:justify-start lg:items-start text-text1 py-2 space-y-4">
        <h1 className="text-3xl 2xl:text-4xl">Hello!!</h1>
        <h2 className="text-2xl 2xl:text-4xl italic">
          I am <strong className="text-4xl 2xl:text-6xl">Ishan Dahal</strong>.
        </h2>
        <p className="text-xl">
          With 5+ years of software development experience, I have passion to
          create visually appealing and high performing application software.
        </p>
        <ul className="list-none w-full flex flex-col justify-center items-start text-xl space-y-4 2xl:text-2xl">
          <li className="flex space-x-4">
            <img src={checkmarkLogo} alt="checkmark" />
            <p className="italic">
              React, Angular, Spring Boot, HTML5, CSS3 developer
            </p>
          </li>
          <li className="flex space-x-4">
            <img src={checkmarkLogo} alt="checkmark" />
            <p>Expert in front-end development.</p>
          </li>
          <li className="flex space-x-4">
            <img src={checkmarkLogo} alt="checkmark" />
            <p>Proficient in back-end development.</p>
          </li>
        </ul>
        <div className="flex w-full h-full justify-center items-center">
          <DownloadPDF />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
