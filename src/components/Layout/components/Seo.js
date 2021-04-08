import React from "react";
import Helmet from "react-helmet";

const Seo = ({ meta: { title = "", description = "" } }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
