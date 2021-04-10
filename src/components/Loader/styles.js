import styled from "styled-components";

const StyledLoader = styled.div`
  background: #000;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 300px;
  .sword {
    transform-style: preserve-3d;
    animation: rotate 8000ms linear infinite;
  }
  .sword .grip {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 30px;
    background: #fff;
    transform-style: preserve-3d;
    transform: translateX(-50%) translateY(10px);
    border-radius: 0 0 99px 99px;
  }
  .sword .grip::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 30px;
    background: #aaa;
    transform: rotateY(-45deg);
    border-radius: 0 0 99px 99px;
  }
  .sword .grip::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 30px;
    background: #ddd;
    transform: rotateY(45deg);
    border-radius: 0 0 99px 99px;
  }
  .sword .beam {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 160px;
    background: rgba(150, 150, 255, 0.8);
    transform-style: preserve-3d;
    transform: translateX(-50%) translateY(-23px);
    border-radius: 99px 99px 0 0;
    box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.7), -10px -5px 60px 5px rgba(0, 100, 255, 1), -50px 15px 100px 10px rgba(0, 100, 255, 0.7);
    animation: mainBeam 10000ms ease-in-out infinite alternate;
  }
  .sword .beam::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 160px;
    background: rgba(50, 100, 255, 0.8);
    transform: rotateY(-45deg);
    border-radius: 99px 99px 0 0;
    box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.7);
    animation: subBeam 10000ms ease-in-out infinite alternate;
  }
  .sword .beam::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 160px;
    background: rgba(50, 100, 255, 0.8);
    transform: rotateY(45deg);
    border-radius: 99px 99px 0 0;
    box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.7);
    animation: subBeam 10000ms ease-in-out infinite alternate;
  }
  @keyframes rotate {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(1080deg) rotateZ(2160deg);
    }
  }
  @keyframes mainBeam {
    0% {
      background: rgba(150, 150, 255, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.7), -10px -5px 60px 5px rgba(0, 100, 255, 1), -50px 15px 100px 10px rgba(0, 100, 255, 0.7);
    }
    20% {
      background: rgba(150, 150, 255, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.7), -10px -5px 60px 5px rgba(0, 100, 255, 1), -50px 15px 100px 10px rgba(0, 100, 255, 0.7);
    }
    30% {
      background: rgba(150, 255, 150, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 255, 100, 0.7), -10px -5px 60px 5px rgba(0, 255, 100, 1), -50px 15px 100px 10px rgba(0, 255, 100, 0.7);
    }
    70% {
      background: rgba(150, 255, 150, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 255, 100, 0.7), -10px -5px 60px 5px rgba(0, 255, 100, 1), -50px 15px 100px 10px rgba(0, 255, 100, 0.7);
    }
    80% {
      background: rgba(250, 150, 150, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(255, 0, 50, 0.7), -10px -5px 60px 5px rgba(255, 0, 50, 1), -50px 15px 100px 10px rgba(255, 0, 50, 0.7);
    }
    100% {
      background: rgba(250, 150, 150, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(255, 0, 50, 0.7), -10px -5px 60px 5px rgba(255, 0, 50, 1), -50px 15px 100px 10px rgba(255, 0, 50, 0.7);
    }
  }
  @keyframes subBeam {
    0% {
      background: rgba(50, 100, 255, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.5);
    }
    20% {
      background: rgba(50, 100, 255, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 100, 255, 0.5);
    }
    30% {
      background: rgba(50, 255, 100, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 255, 100, 0.5);
    }
    70% {
      background: rgba(50, 255, 100, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(0, 255, 100, 0.5);
    }
    80% {
      background: rgba(255, 100, 50, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(255, 0, 50, 0.5);
    }
    100% {
      background: rgba(255, 100, 50, 0.8);
      box-shadow: 0 -5px 30px 5px rgba(255, 0, 50, 0.5);
    }
  }
`;

export default StyledLoader;
