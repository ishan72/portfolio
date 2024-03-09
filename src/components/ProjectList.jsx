import React from "react";
import { projectInvolved } from "../constant/Information";
import StackDisplayComponent from "./StackDisplayComponent";

function ProjectList() {
  return (
    <div className="h-screen bg-white">
      <div className="md:w-11/12 md:mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl pt-4 text-button2 text-center">
          Projects
        </h1>
      </div>
      <div className="w-11/12 mx-auto mt-2 md:mt-4">
        <div className="hidden md:inline-block md:flex md:flex-wrap text-center py-2 text-burgundry text-2xl">
          <h3 className="w-1/5">Title</h3>
          <h3 className="w-1/4">Stack</h3>
          <h3 className="flex-1">Detail</h3>
        </div>
        {projectInvolved.map((item, index) => {
          return (
            <div
              key={index}
              className={`p-2 ${
                index === 0 || index % 2 === 0 ? "bg-paleGreen" : "bg-bisque"
              } text-forestGreen ${index === 0 ? "rounded-t-lg" : ""} ${
                index === projectInvolved.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              <div className="flex flex-wrap md:items-center">
                <h3 className="w-2/4 font-bold text-lg md:w-1/5">
                  {item.name}
                </h3>
                <div className="w-2/4 flex flex-row space-x-1 justify-end md:w-1/4 md:justify-center">
                  {item.stackUsed &&
                    item.stackUsed.map((item, index) => {
                      return <StackDisplayComponent key={index} item={item} />;
                    })}
                </div>
                <div className="w-full md:flex-1 md:text-md lg:text-lg">
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
