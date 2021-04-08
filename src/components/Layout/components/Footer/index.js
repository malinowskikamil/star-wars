import React from "react";

import StyledFooter from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <small>&copy; Copyright {new Date().getFullYear()}, Malinowski Kamil</small>
    </StyledFooter>
  );
};

export default Footer;
