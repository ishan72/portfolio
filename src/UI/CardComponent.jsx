import React, { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function CardComponent({ itemName, itemImage, itemLink }) {
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
      className="w-[clamp(250px,_50%,_400px)] h-[clamp(250px,_20vw,_400px)]"
    >
      <div
        className="h-full shadow-cardShadow flex items-center justify-end rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${itemImage})` }}
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
          <a href={itemLink ? itemLink : ""} target="_blank" rel="nofollow">
            <div className="flex items-center justify-center space-x-2 text-lg md:text-3xl">
              <FaExternalLinkAlt />
              <div className="underline tracking-wider">View</div>
            </div>
          </a>
          <h2 className="text-lg md:text-3xl text-white tracking-widest">
            {itemName}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
