import styled from "styled-components";

const StyledSearch = styled.div`
  margin-bottom: 10px;
  max-width: 200px;
  input {
    padding: 9px;
    border-radius: 4px;
    font-family: Source Sans Pro, sans-serif;
    width: 100%;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 20px;
    transition: 0.2s;
    &:focus {
      border-color: #ffe81f;
    }
  }
`;

export default StyledSearch;
