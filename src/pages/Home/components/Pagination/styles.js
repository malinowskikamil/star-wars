import styled from "styled-components";

const StyledPagination = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .pagination {
    &-left {
      display: flex;
      align-items: center;
    }
    &-right {
    }
    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 13px;
      line-height: 24px;
      padding: 3px;
      font-weight: 500;
      border-radius: 4px;
      margin-right: 5px;
      background-color: #000;
      min-width: 30px;
      transition: 0.2s;
      text-decoration: none;
      svg {
        max-width: 15px;
      }
      &.active {
        background-color: #000;
        color: #ffe81f;
      }
      &.arrow {
        background-color: #000;
        path {
          fill: #fff;
        }
        &[disabled] {
          pointer-events: none;
          background-color: rgba(0, 0, 0, 0.5);
          path {
            fill: #fff;
          }
        }
      }
    }
    &-info {
      margin-left: 14px;
      color: #fff;
    }
  }
  select {
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background: #000;
    padding: 4px 10px 4px 4px;
    text-align: left;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 500;
    color: #ffe81f;
  }
`;

export default StyledPagination;
