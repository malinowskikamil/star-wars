import styled from "styled-components";

const StyledHome = styled.div`
  padding: 40px 0;
  .logotype {
    max-width: 300px;
    margin: 0 auto;
    svg {
      max-width: 100%;
    }
  }
  .dashboard {
    border-radius: 10px;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.98);
  }
  @media screen and (max-width: 800px) {
    padding: 20px 0;
  }
`;

export default StyledHome;
