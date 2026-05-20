import React from "react";
import HeaderCorporate from "./HeaderCorporate";
import HeaderMain from "./HeaderMain";

const Header = ({ variant, ...props }) => {
  if (variant === "corporate") {
    return <HeaderCorporate {...props} />;
  }
  return <HeaderMain {...props} />;
};

export default Header;
