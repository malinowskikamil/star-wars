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
      border-top: 1px solid #ebedf2;
      transition: 0.2s;
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
  .btn-favorite {
    transition: 0.2s;
    svg {
      path {
        fill: rgb(255, 232, 31, 0.4);
        transition: 0.4s;
      }
    }
    &.fill {
      svg {
        path {
          fill: #ffe81f;
        }
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default StyledTable;
