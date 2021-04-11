import styled from "styled-components";

const StyledSearch = styled.div`
  max-width: 300px;
  margin-bottom: 30px;
  input {
    padding: 9px;
    border: none;
    border-radius: 4px;
    font-family: Source Sans Pro, sans-serif;
    width: 100%;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 20px;
    transition: box-shadow 0.2s;
    &:focus {
      box-shadow: 0 0 10px #ffe81f;
    }
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto 30px;
  }
`;

export default StyledSearch;
