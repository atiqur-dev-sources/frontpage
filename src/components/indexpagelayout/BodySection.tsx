import React, { ReactNode } from 'react';

const BodySection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
     <div>Develop Preview Ship</div>
      { children }
    </>
   
    
  );
};

export default BodySection;
