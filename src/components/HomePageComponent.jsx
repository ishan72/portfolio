import React from "react";
import NavSection from "./sections/NavSection";
import downloadLogo from "../assets/logos/download_icon.png";
import HeroSection from "./sections/HeroSection";

function HomePage() {
  const downloadURL =
    "https://github.com/ishan72/portfolio/tree/master/src/assets/IshanDahal.docx";
  const handleDownloadButton = () => {
    const fileName = downloadURL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = downloadURL;
    console.log(fileName);
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="h-full bg-gradient-to-t from-green-400 via-green-900 to-green-500 flex justify-center items-center">
      <div className="w-11/12 h-4/5 box">
        <div className="z-10 h-full w-full p-4">
          <NavSection />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="h-full flex flex-col justify-center items-center">
            <p className="text-5xl xl:text-8xl lg:tracking-wider lg:pb-4">
              Hello, I'm Ishan Dahal.
            </p>
            <p className="text-3xl xl:text-5xl mt-4">
              Full-Stack Developer | AI enthusiast
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => handleDownloadButton()}
                className="flex cursor-pointer shadow-md py-2 px-4 lg:py-2 lg:px-8 rounded-lg text-2xl bg-button2 hover:bg-gradient-to-r from-orange-600 via-orange-900 to-black"
              >
                <img src={downloadLogo} alt="Download icon" />
                <span>Resume</span>
              </button>
            </div>
          </div> */
}
//</div>
{
  /* <div className="h-full flex flex-col justify-center text-white z-10">
            <NavSection />
            <p className="text-5xl xl:text-8xl lg:tracking-wider lg:pb-4">
              Hello, I'm Ishan Dahal.
            </p>
            <p className="text-3xl xl:text-5xl mt-4">
              Full-Stack Developer | AI enthusiast
            </p>
            <div className="flex justify-center pt-8 text-white">
              <button
                onClick={() => handleDownloadButton()}
                className="flex cursor-pointer shadow-md py-2 px-4 lg:py-2 lg:px-8 rounded-lg text-2xl bg-button2 hover:bg-gradient-to-r from-orange-600 via-orange-900 to-black"
              >
                <img src={downloadLogo} alt="Download icon" />
                <span>Resume</span>
              </button>
            </div>
          </div> */
}

export default HomePage;
