import React, { useRef, useState } from "react";
import logo from "../assets/logos/ppsckarnali.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";

function CardComponent() {
  const [isHover, setIsHover] = useState(false);
  const divRef = useRef(null);

  const handleMouseEnter = () => {
    if (divRef.current) {
      setIsHover((prevState) => !prevState);
    }
  };

  const handleMouseLeave = () => {
    if (divRef.current) {
      setIsHover((prevState) => !prevState);
    }
  };
  return (
    <div
      ref={divRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[clamp(200px,_50%,_400px)] h-[clamp(100px,_20vw,_400px)]"
    >
      <div
        className="h-full flex items-center justify-end rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div
          style={{
            background:
              " radial-gradient(ellipse, rgba(255, 140, 0, 0.5), rgba(153, 51, 0, 0.5), rgba(255, 255, 255, 0.4))",
          }}
          className={`${
            !isHover ? "hidden" : "visible"
          } text-white h-full w-1/2 flex flex-col space-y-4 items-center justify-center rounded-r-2xl border-l-2 border-white border-dotted`}
        >
          <a
            href="https://ppsconline.karnali.gov.np/#/login"
            target="_blank"
            rel="nofollow"
          >
            <div className="flex items-center justify-center space-x-2 text-3xl">
              <FaExternalLinkAlt />
              <div className="underline">View</div>
            </div>
          </a>
          <h2 className="text-3xl text-white tracking-widest">PPSC</h2>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
