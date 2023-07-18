import React from "react";
import reactlogo from "../assets/logos/react16.png";
import htmllogo from "../assets/logos/html16.png";
import csslogo from "../assets/logos/css16.png";

function ProjectList() {
  return (
    <div className="py-4 font-arapey text-white">
      <div>
        <h1 className="text-2xl">Projects</h1>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="rounded-lg p-2 bg-white text-black">
          <div className="flex flex-wrap md:items-center">
            <h3 className="w-2/4 font-bold text-lg md:w-1/5">
              PPSC web portal
            </h3>
            <div className="w-2/4 flex flex-row space-x-2 justify-end md:w-1/4 md:space-x-1 md:justify-center">
              <img
                src={reactlogo}
                alt="React logo"
                className="md:inline-block md:h-8 md:w-8"
              />
              <img
                src={htmllogo}
                alt="HTML logo"
                className="md:inline-block md:h-8 md:w-8"
              />
              <img
                src={csslogo}
                alt="CSS logo"
                className="md:inline-block md:h-8 md:w-8"
              />
            </div>
            <div className="w-full md:flex-1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dicta fugiat corporis deserunt, error architecto
                voluptate quibusdam quod, incidunt vitae nostrum voluptatibus
                soluta. Odit similique architecto accusantium dolorem tempora
                quae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
