import React from "react";
import Responsive from "../assets/logos/Responsive.png";
import Dynamic from "../assets/logos/Dynamic.png";
import Appealing from "../assets/logos/Appealing.png";
import MyPic from "../assets/logos/mypic.png";

function AboutComponent() {
  return (
    <div className="min-h-screen h-fit bg-lavender flex flex-col justify-center">
      <div className="mx-auto w-11/12">
        <div className="text-navyBlue text-4xl text-center underline">
          About
        </div>
        <div className="flex justify-between lg:mt-8">
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
        <div>
          <img src={MyPic} alt="my_pic" />
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
