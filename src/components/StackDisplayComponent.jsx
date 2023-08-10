import React from "react";
import reactlogo from "../assets/logos/react16.png";
import htmllogo from "../assets/logos/html16.png";
import csslogo from "../assets/logos/css16.png";
import { StackEnum } from "../constant/Information";

function StackDisplayComponent({ item }) {
  switch (item) {
    case StackEnum.VALUE_HTML:
      return (
        <img
          src={htmllogo}
          alt="HTML logo"
          className="md:inline-block md:h-8 md:w-8"
        />
      );
    case StackEnum.VALUE_CSS:
      return (
        <img
          src={csslogo}
          alt="CSS logo"
          className="md:inline-block md:h-8 md:w-8"
        />
      );
    case StackEnum.VALUE_JAVASCRIPT:
      return (
        <img
          src={reactlogo}
          alt="React logo"
          className="md:inline-block md:h-8 md:w-8"
        />
      );
    default:
      return (
        <img
          src={reactlogo}
          alt="React logo"
          className="md:inline-block md:h-8 md:w-8"
        />
      );
  }
}

export default StackDisplayComponent;
