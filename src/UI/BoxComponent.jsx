import React from "react";

function BoxComponent({ itemName, imageName, docLink }) {
  const styles = {
    background: "black",
    hover: "hover:bg-black hover:bg-opacity-30 hover:p-2 hover:rounded-xl",
  };
  return (
    <div
      style={{ width: "300px", height: "250px" }}
      className="relative border-4 border-dashed border-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="absolute transform right-0 translate-x-3.5 -translate-y-3.5  w-6 h-6 text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="absolute transform -translate-x-3.5 -translate-y-3.5  w-6 h-6 text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="absolute transform bottom-0 -translate-x-3.5 translate-y-3.5  w-6 h-6 text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="absolute transform right-0 bottom-0 translate-x-3.5 translate-y-3.5  w-6 h-6 text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m6-6H6"
        ></path>
      </svg>
      <div className="h-full flex flex-col">
        <div className="h-[70%] flex items-end justify-center">
          <img
            src={imageName}
            width="120px"
            height="120px"
            alt="react"
            className="transition-transform transform hover:scale-[1.2]"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <a href={docLink} target="_blank" rel="noreferrer">
            <p
              className={`text-3xl italic font-arapey hover:text-white ${styles.hover}`}
            >
              {itemName}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BoxComponent;
