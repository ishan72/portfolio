import React from "react";
import downloadLogo from "../assets/logos/download_icon.png";

function HomePage() {
  const downloadURL = "http://localhost:3000/Ishan_Dahal_Resume.pdf";
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
    <div className="min-h-screen h-screen bg-background1 text-white flex flex-col justify-center">
      <div className="mx-auto w-11/12 text-center">
        <p className="text-5xl xl:text-8xl lg:tracking-wider lg:pb-4">
          Hello, I'm Ishan Dahal.
        </p>
        <p className="text-3xl xl:text-5xl mt-4">
          Full-Stack Developer | AI enthusiast
        </p>
        <div className="flex justify-center pt-8 text-white">
          <button
            onClick={() => handleDownloadButton()}
            className="flex cursor-pointer shadow-md py-3 px-4 lg:py-4 lg:px-8 rounded-lg text-2xl bg-button2 text-black hover:opacity-80"
          >
            <img src={downloadLogo} alt="Download icon" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
