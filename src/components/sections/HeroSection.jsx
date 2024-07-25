import React from "react";
import downloadLogo from "../../assets/logos/download_icon.png";
import checkmarkLogo from "../../assets/logos/checkmark.svg";

function HeroSection() {
  const downloadURL =
    "https://github.com/ishan72/portfolio/tree/master/src/assets/IshanDahal.docx";
  const handleDownloadButton = () => {
    const fileName = downloadURL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = downloadURL;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="h-full flex">
      <div className="flex-1">
        <div className="ml-8 w-80 h-80 border-2 border-white rounded-full relative"></div>
        <div className="w-24 h-24 bg-borderColor rounded-full absolute top-48 left-80"></div>
        <div className="w-52 h-52 border-4 border-borderColor rounded-full absolute top-60 left-72 profile-pic"></div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-start text-white py-2 space-y-4">
        <h1 className="text-4xl">Hello!!</h1>
        <h2 className="text-3xl italic">
          I am <strong className="text-6xl">Ishan Dahal</strong>.
        </h2>
        <p className="text-xl">
          Having 5+ years of software development experience, I have passion to
          create visually appealing and high performing application software.
        </p>
        <ul className="list-none w-full flex flex-col justify-center items-center text-xl space-y-4">
          <li className="flex space-x-4">
            <img src={checkmarkLogo} alt="checkmark" />
            <p>Expert in front-end development.</p>
          </li>
          <li className="flex space-x-4">
            <img src={checkmarkLogo} alt="checkmark" />
            <p>Expert in back-end development.</p>
          </li>
        </ul>
        <div className="flex w-full h-full justify-center items-center">
          <button
            onClick={() => handleDownloadButton()}
            className="flex cursor-pointer shadow-md py-2 px-4 lg:py-2 lg:px-8 rounded-lg text-2xl bg-button2 hover:bg-gradient-to-r from-orange-600 via-orange-900 to-black"
          >
            <img src={downloadLogo} alt="Download icon" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
