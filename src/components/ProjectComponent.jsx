import React from "react";

function ProjectComponent() {
  return (
    <div className="bg-color4 h-4/5 text-white flex flex-col item-center justify-center">
      <div className="w-4/5 mx-auto">
        <div className="pb-16">
          <p className="text-4xl font-arapey">Projects</p>
        </div>

        <div className="flex flex-row space-x-40">
          <div className="w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 text-center flex flex-col item-center justify-center text-xl hover:text-2xl">
            HTML,CSS
          </div>
          <div className="w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 text-center flex flex-col item-center justify-center text-xl hover:text-2xl">
            React
          </div>
          <div className="w-36 h-40 rounded-xl bg-gray-500 text-white hover:bg-gray-900 text-center flex flex-col item-center justify-center text-xl hover:text-2xl">
            React &<br></br> Python
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
