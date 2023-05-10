import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import Resume from "../assets/Resume.pdf";

function HomeComponent() {
  const email = "ishan.dahal72@gmail.com";
  const profileUrl = "ishan-dahal-9640a8171/?msgConversationId=new";
  const repoId = "ishan72";
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <div className="font-arapey">
        <p className="text-4xl">Hello!!</p>
        <p className="text-3xl">It's me Ishan.</p>
        <p className="text-2xl">
          I am a software developer,
          <br />
          specializing in frontend development.
        </p>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="btn w-full rounded-full bg-blue-500 px-2 py-2 hover:bg-sky-700"
        >
          <a
            href={Resume}
            className="w-full"
            download="Ishan's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex  items-center justify-center">
              <AiFillFilePdf size="1em" />
              <p className="ml-2">Download CV</p>
            </div>
          </a>
        </button>
      </div>
      <div className="text-left mt-2 text-black">
        <p>Connect via...</p>
        <div className="mt-2 flex flex-row space-x-4 justify-center">
          <button onClick={() => (window.location.href = `mailto:${email}`)}>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png"
              alt="Gmail Logo"
              width={32}
            />
          </button>
          <button
            onClick={() =>
              window.open(`https://www.linkedin.com/in/${profileUrl}/`)
            }
          >
            <img
              src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
              alt="LinkedIn Logo"
              width={32}
            />
          </button>
          <button onClick={() => window.open(`https://github.com/${repoId}`)}>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width={32}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
