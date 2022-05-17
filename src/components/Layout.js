import React, { useContext } from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;

/* 
concerns for Proof of Concept: 
    1- if user chooses a color, for example: light yellow, and we change the required 
    components' colors, how are we going to make sure every other color in our theme and website
    matches light yellow ? 

    2- 

    */
