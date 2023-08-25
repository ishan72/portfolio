import React from "react";
import Responsive from "../assets/logos/Responsive.png";
import Dynamic from "../assets/logos/Dynamic.png";
import Appealing from "../assets/logos/Appealing.png";
import MyPic from "../assets/logos/mypic.png";
import { techstack } from "../constant/Information";

function AboutComponent() {
  return (
    <div className="min-h-screen h-fit bg-lavender flex flex-col justify-center">
      <div className="mx-auto w-11/12">
        <div className="text-navyBlue text-4xl text-center underline">
          About
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between mt-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="">
              <img src={Responsive} alt="responsive" />
            </div>
            <div className="text-darkSlateGray mt-2 text-center">
              <p className="font-bold text-2xl">RESPONSIVE</p>
              <p className="text-xl">
                My layouts will work <br /> on any device, big or small.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img src={Dynamic} alt="dynamic" />
            <div className="text-darkSlateGray text-center">
              <p className="font-bold text-2xl">DYNAMIC</p>
              <p className="text-xl">
                I excel in creating <br /> lively and dynamic websites.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img src={Appealing} alt="appealing" />
            <div className="text-darkSlateGray mt-2 text-center">
              <p className="font-bold text-2xl">APPEALING</p>
              <p className="text-xl">
                My work captivates with <br /> its irresistible allure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-2 md:flex-row md:mt-8">
          <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
            <div>
              <img src={MyPic} alt="my_pic" />
            </div>
            <p className="w-full text-center text-darkSlateGray md:w-6/12">
              Having 3+ years of professional experience in front-end
              development, I have passion to create visually appealing and
              interactive UI.
            </p>
          </div>
          <div className="w-full md:w-6/12">
            <div className="flex flex-col space-y-2 w-full  md:space-y-8 md:w-10/12">
              {techstack.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-lightPurple flex items-center w-full rounded-lg"
                  >
                    <p className=" bg-white w-64 py-2 pl-2">{item.name}</p>
                    <div
                      className={`flex flex-row justify-between w-full py-2 pr-2`}
                    >
                      <div className={``}></div>
                      <p className={` text-right text-white font-bold`}>
                        {item.value}%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
