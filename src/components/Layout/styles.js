import styled from "styled-components";

const StyledLayout = styled.div`
  background-image: url("/bg.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  main {
    min-height: calc(100vh - 50px);
  }
  .main-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default StyledLayout;
