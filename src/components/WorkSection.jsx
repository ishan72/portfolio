import React from "react";
import info from "../assets/info.png";
import dogma from "../assets/dogma.png";
import treeleaf from "../assets/treeleaf.png";

function WorkSection() {
  return (
    <div className="h-4/5 flex flex-col item-center justify-center bg-color3 w-full py-16">
      <div className="w-4/5 mx-auto text-white">
        <div className="text-4xl pb-16">
          <p className="font-arapey">Where I worked ?</p>
        </div>
        <div className="flex flex-col space-y-12  md:flex-row md:justify-between md:space-x-24 md:space-y-0">
          <div className="bg-gray-500 rounded-xl flex-1">
            <div className="relative max-w-lg p-4 rounded-xl">
              <div className="absolute rounded-full bg-white p-2 -left-8 top-1/2 transform -translate-y-1/2 ">
                <img
                  src={info}
                  alt="infoDevelopers"
                  className="w-16 object-fill"
                />
              </div>
              <div className="pl-12 py-2 text-white">
                <p>Info Developers Pvt. Ltd</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 rounded-xl flex-1">
            <div className="relative max-w-lg p-4 rounded-xl">
              <div className="absolute rounded-full bg-white p-2 -left-8 top-1/2 transform -translate-y-1/2">
                <img src={dogma} alt="dogma group" className="w-16 h-16" />
              </div>
              <div className="pl-12 py-2 text-white">
                <p>SeeLogic International</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 rounded-xl flex-1">
            <div className="relative max-w-lg p-4 rounded-xl">
              <div className="absolute rounded-full bg-white p-2 -left-8 top-1/2 transform -translate-y-1/2">
                <img src={treeleaf} alt="treeleaf.ai" className="w-16 h-16" />
              </div>
              <div className="pl-12 py-2 text-white">
                <p>treeleaf.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
