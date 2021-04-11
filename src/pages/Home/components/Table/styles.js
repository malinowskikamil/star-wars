import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-bottom: 1px solid #ebedf2;
  transition: 0.2s;
  &.loading {
    opacity: 0.2;
  }
  thead {
    th {
      cursor: pointer;
      padding: 13px 0 13px 30px;
      text-align: left;
      vertical-align: middle;
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
  tbody {
    tr {
      border-top: 1px solid #fff;
      td {
        padding: 19px 0 19px 30px;
        text-align: left;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          transition: 0.2s;
          &:hover {
            color: #ffe81f;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    border: none;
    max-width: 400px;
    margin: 0 auto;
    thead {
      display: none;
    }
    tbody {
      tr {
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 60px 20px 20px;
        position: relative;
        td {
          padding: 0;
          text-align: right;
          display flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          &[data-label]::before {
            content: ""attr(data-label)": ";
          }
          &.favorite-cell {
            position: absolute;
            top: 15px;
            right: 10px;
          }
          &.lp-cell{
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 20px;
            &::after{
              content: '.';
            }
          }
        }
      }
    }
  }
`;

export default StyledTable;
