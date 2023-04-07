
import React, { useState, useEffect } from "react";
import styles from "./AnimatedText.module.css";

interface Props {
  slogans: string[];
}

const AnimatedText: React.FC<Props> = ({ slogans }) => {
  const [currentSlogan, setCurrentSlogan] = useState("");
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSloganIndex(
        currentSloganIndex === slogans.length - 1 ? 0 : currentSloganIndex + 1
      );
      setTypingCompleted(false);
    }, 30000);
    return () => clearInterval(intervalId);
  }, [currentSloganIndex, slogans]);

  useEffect(() => {
    if (!typingCompleted) {
      const currentSlogan = slogans[currentSloganIndex];
      let currentCharacterIndex = 0;
      let currentSubstring = "";

      const intervalId = setInterval(() => {
        currentSubstring += currentSlogan.charAt(currentCharacterIndex);
        currentCharacterIndex++;

        setCurrentSlogan(currentSubstring);

        if (currentCharacterIndex === currentSlogan.length) {
          clearInterval(intervalId);
          setTypingCompleted(true);
          setTimeout(() => {
            setTypingCompleted(false);
          }, 24000);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [currentSloganIndex, slogans, typingCompleted]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.text}>{currentSlogan}</span>
        <div className={styles.blinkCursor}></div>
      </div>
    </div>
  );
};

export default AnimatedText;
