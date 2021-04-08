import React from "react";
import Helmet from "react-helmet";
import { Seo, Footer } from "./components";

import StyledLayout from "./styles";

const Layout = ({ meta, children }) => {
  return (
    <StyledLayout>
      <Seo meta={meta} />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
