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
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .btn-back {
      transition: 0.2s;
      &:hover {
        transform: translateX(-5px);
      }
    }
    .btn-favorite {
      svg {
        width: 30px;
        height: 30px;
      }
    }
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
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 10px;
        span {
          flex: 1;
          font-size: 17px;
          line-height: 25px;
          &:first-child {
            text-align: left;
          }
          &:last-child {
            padding-left: 20px;
            text-align: right;
          }
        }
      }
    }
    &__grid {
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      width: calc(100% + 20px);
      margin: 0 -10px 40px;
      .grid-item {
        flex-basis: calc(50% - 20px);
        max-width: calc(50% - 20px);
        border: 1px solid #ffe81f;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        p {
          font-size: 16px;
          line-height: 20px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          &.name {
            font-size: 18px;
            line-height: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            text-align: center;
            justify-content: center;
            align-items: center;
            min-height: 44px;
          }
          span {
            &:first-child {
              text-align: left;
            }
            &:last-child {
              padding-left: 20px;
              text-align: right;
            }
          }
        }
        &.movie {
          p {
            flex-direction: column;
            margin-bottom: 15px;
            &.name {
              font-size: 18px;
              line-height: 22px;
              font-weight: 600;
              margin-bottom: 20px;
              text-align: center;
              justify-content: center;
              align-items: center;
              min-height: 44px;
            }
            span {
              &:first-child,
              &:last-child {
                text-align: center;
                padding: 0;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 20px 0;
    .dashboard {
      padding: 20px;
    }
    .basic-info {
      .wrapper {
        flex-direction: column;
        & > section {
          padding: 0;
        }
      }
      &__grid {
        .grid-item {
          flex-basis: 100%;
          max-width: 400px;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 10px 0;
    .dashboard {
      padding: 15px;
    }
    .basic-info {
      &__name {
        font-size: 25px;
        line-height: 35px;
      }
      &__section-title {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 15px;
      }
      &__list {
        margin-bottom: 30px;
        li {
          margin-bottom: 5px;
          span {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
      &__grid {
        margin-bottom: 10px;
        .grid-item {
          p {
            font-size: 14px;
            &.name {
              font-size: 16px;
            }
          }
          &.movie {
            p {
              margin-bottom: 10px;
              &.name {
                font-size: 18px;
                line-height: 20px;
                min-height: 40px;
              }
            }
          }
        }
      }
    }
  }
  .animated-section {
    animation-name: slideIn;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default StyledPerson;
