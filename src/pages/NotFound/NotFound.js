import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "components";
import StyledNotFound from "./styles";

export default memo(({ staticContext }) => {
  if (staticContext) staticContext.status = "404";

  return (
    <Layout meta={{ title: "Strona o podanym adresie nie istnieje", description: "" }}>
      <StyledNotFound>
        <div className='not-found-box'>
          <h1>Strona o podanym adresie nie istnieje.</h1>
          <p>
            <Link to='/' className="btn">
              Wróć do strony głównej
            </Link>
          </p>
        </div>
      </StyledNotFound>
    </Layout>
  );
});
