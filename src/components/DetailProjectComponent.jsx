import React from "react";

const projectList = [];

function DetailProjectComponent(props) {
  const { setSeeDetailIsOn, setShowAbsoluteClass, showId } = props;
  console.log(showId);

  return (
    <div className="w-4/5 mx-auto flex flex-col h-full">
      <div className="flex flex-row space-x-4 items-center pt-16 h-36">
        <div
          onClick={() => {
            setSeeDetailIsOn(false);
            setShowAbsoluteClass(false);
          }}
          className="bg-white text-black p-1 px-4 rounded-lg cursor-pointer border-0 hover:bg-gray-100"
        >
          Back
        </div>
        <p className="font-arapey text-5xl">
          {showId === "1"
            ? "Landing Page Projects"
            : showId === "2"
            ? "React Projects"
            : "React & Python Projects"}
        </p>
      </div>
      {projectList && projectList.length ? (
        <div className="flex flex-row">
          <div className="w-64 bg-red-500">1</div>
          <div className="flex-1 bg-white">2</div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col item-center justify-center">
          <p className="text-center">No project to show</p>
        </div>
      )}
    </div>
  );
}

export default DetailProjectComponent;
