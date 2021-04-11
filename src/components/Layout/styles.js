import styled from "styled-components";

const StyledLayout = styled.div`
  background-image: url("/bg.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  main {
    min-height: 100vh;
  }
  .main-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    @media screen and (max-width: 600px) {
      padding: 0 10px;
    }
  }
`;

export default StyledLayout;
