import styled from "styled-components";

const StyledPerson = styled.div`
  padding: 40px 0;
  .dashboard {
    margin: 0 auto;
    max-width: 800px;
    border-radius: 10px;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.98);
    color: #ffe81f;
  }
  .basic-info {
    text-align: center;
    .wrapper {
      display: flex;
      justify-content: space-between;
      & > section {
        flex: 1;
        padding: 0 20px;
      }
    }
    &__name {
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    &__section-title {
      font-size: 25px;
      line-height: 35px;
      margin-bottom: 20px;
      font-weight: 600;
      text-decoration: underline;
    }
    &__list {
      max-width: 320px;
      margin: 0 auto 60px;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        span {
          font-size: 20px;
          line-height: 27px;
        }
      }
    }
  }
`;

export default StyledPerson;
