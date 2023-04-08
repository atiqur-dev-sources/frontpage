import React, { ReactNode } from 'react';
import AnimatedText from '../StyleComponents/AnimatedText/AnimatedText';

const BodySection: React.FC<{ children: ReactNode }> = ({ children }) => {
  const slogans = ["Powering your business with cutting-edge software solutions.",  "Innovative software for game-changing results.",  "Transforming your digital landscape for a brighter future.",  "Building software that drives your success.",  "Unleashing the power of technology to take your business to the next level.",  "Driving efficiency and productivity with intelligent software solutions.",  "Revolutionizing the way you do business, one line of code at a time.",  "Enabling your growth through strategic software development.",  "Accelerating your digital transformation with our custom software solutions.",  "Empowering your business with smart and scalable software solutions."];
  return (
    <>
     { children }
        <div><AnimatedText slogans={slogans} /></div>
     
    </>
   
    
  );
};

export default BodySection;
