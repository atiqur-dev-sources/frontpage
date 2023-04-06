import React, { ReactNode } from 'react';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>header</div>
      { children }
    </>
  );
};

export default Header;
