import React from "react";
import Polygon from "../assets/logos/Polygon.png";
import linkedin from "../assets/logos/linkedin.png";
import gmail from "../assets/logos/gmail.svg";
import github from "../assets/logos/github.svg";

function ContactComponent() {
  return (
    <div className="min-h-screen h-screen  flex flex-col border-t-warmBeige">
      <div className="">
        <img src={Polygon} alt="polygon" />
      </div>
      <div className="w-11/12 mx-auto flex-1 flex flex-col space-y-8 items-center justify-center">
        <p
          className="text-center underline text-2xl"
          style={{ textUnderlineOffset: "1rem" }}
        >
          Contacts
        </p>
        <div className="flex items-end space-x-2">
          <img src={gmail} alt="gmail" width={30} height={30} />
          <p>ishan.dahal72@gmail.com</p>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="p-2 hover:bg-burgundry"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ishan-dahal-9640a8171/",
                "_blank"
              )
            }
          >
            <img src={linkedin} alt="linkedin" />
          </button>
          <button
            className="p-2 hover:bg-burgundry"
            onClick={() => window.open("https://github.com/ishan72", "_blank")}
          >
            <img src={github} alt="github" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
