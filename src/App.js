import { useState, useRef } from "react";
import "./App.css";
import DashArea from "./components/dashArea";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const nextPosition = window.scrollY + window.innerHeight;
    window.scrollTo({ top: nextPosition, behavior: "smooth" });
    setScrollPosition(nextPosition);
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-color2">
        {/* <div className="flex flex-row space-x-12 text-white w-4/5 mx-auto cursor-pointer">
          <p
            className={`${
              selectedOption === 0 ? "border-b-4 border-white" : ""
            } p-1`}
            onClick={() => {
              setSelectedOption(0);
              handleScroll(0);
            }}
          >
            Home
          </p>
          <p
            className={`${
              selectedOption === 1 ? "border-b-4 border-white" : ""
            } p-1`}
            onClick={() => setSelectedOption(1)}
          >
            Education
          </p>
          <p
            className={`${
              selectedOption === 2 ? "border-b-4 border-white" : ""
            } p-1`}
            onClick={() => {
              setSelectedOption(2);
              handleScroll(100);
            }}
          >
            Work Experience
          </p>
          <p
            className={`${
              selectedOption === 3 ? "border-b-4 border-white" : ""
            } p-1`}
            onClick={() => setSelectedOption(3)}
          >
            Research
          </p>
          <p
            className={`${
              selectedOption === 4 ? "border-b-4 border-white" : ""
            } p-1`}
            onClick={() => {
              setSelectedOption(4);
              handleScroll(180);
            }}
          >
            Projects
          </p>
        </div> */}
        <DashArea selectedOption={selectedOption} />
      </div>
    </>
  );
}

export default App;
