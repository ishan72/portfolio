import React from "react";
import { experienceInvolved } from "../constant/Information";

function WorkList() {
  return (
    <div className="min-h-screen h-fit py-12 font-arapey bg-mutedLavender flex flex-col justify-center">
      <div className="w-11/12 mx-auto">
        <div>
          <h3 className="text-2xl md:text-4xl text-navyBlue">Experience</h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center mt-4">
          <div className="lg:w-1/2">
            <p className="md:text-xl lg:text-2xl lg:w-4/5 text-forestGreen">
              I have 3 years of professional software development experience,
              specializing in front-end development.
            </p>
          </div>
          <div className="flex-1">
            {experienceInvolved &&
              experienceInvolved.map((item, index) => {
                return (
                  <div key={index} className="flex space-x-4 mb-8">
                    <div className="text-burgundry md:text-xl lg:text-2xl flex-1">
                      {item.date}
                    </div>
                    <div className="w-3/4">
                      <a
                        href={item.link}
                        rel="noreferrer"
                        target="_blank"
                        className="text-burgundry md:text-xl lg:text-2xl hover:underline"
                      >
                        {item.role} &#x2022; {item.companyName}
                      </a>
                      <p className="text-forestGreen text-lg">{item.detail}</p>
                      <div className="flex flex-wrap  md:space-x-4 mt-2">
                        {item.tags &&
                          item.tags.map((tag, index) => {
                            return (
                              <div
                                key={index}
                                className="bg-paleGreen text-darkGreen rounded-xl py-1 px-4"
                              >
                                {tag}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkList;
