import React, { useState, useEffect } from "react";

function Typewriter({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const typewriterEffect = () => {
      if (isTyping) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setTimeout(() => setIsTyping(true), 500);
        }
      }
    };

    const intervalId = setInterval(typewriterEffect, speed);
    return () => clearInterval(intervalId);
  }, [text, speed, index, isTyping]);

  return <span>{displayedText}</span>;
}
export default Typewriter;
