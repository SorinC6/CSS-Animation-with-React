import React from "react";
import styled from "styled-components";
import Bg from "../../assets/bg.jpg";
import Bg1 from "../../assets/bg1.png";
import bike from "../../assets/motobike.png";
import car from "../../assets/car.png";

const More = () => {
  return (
    <Container>
      <p>More</p>
      <DivWrapper />
      <DivWrapper2 />
      <CardLoad>Bang!</CardLoad>
      <Driving>
        <img src={bike} alt="" />
        <img src={car} alt="" />
      </Driving>
      <BackgroundImage />
      <Heart />
      <Bounce>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </Bounce>
    </Container>
  );
};

export default More;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  background-color: #ed8a63;
  margin: 0 auto;
  perspective: 500px;
`;

const DivWrapper = styled.div`
  margin: 20px;
  width: 100px;
  height: 100px;
  background-color: blue;
  animation-name: moving;
  animation-duration: 4s;
  @keyframes moving {
    0% {
      transform: translateX(-1000px);
    }
    20% {
      transform: translateX(0);
    }
    100% {
      transform: translateY(-100px);
    }
  }
`;

const DivWrapper2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  /* animation-name: moving2;
  animation-duration: 4s;
  animation-fill-mode: both; */
  /* we can add animation-iteration-count for repeting the animation */
  /*if we want to infinite repete we can add inifinite */
  /* ease-in ease-out */
  /* animation-timing-function: ease;
  animation-delay: 1s;
  animation-direction: normal; */
  animation: moving2 3s both infinite ease alternate 1s;
  @keyframes moving2 {
    0% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(500px);
    }
  }
`;

const CardLoad = styled.div`
  margin: 20px;
  width: 100px;
  height: 100px;
  background-color: lightyellow;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  animation: loading 2s linear infinite alternate;

  @keyframes loading {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: rotateX(0deg) rotateY(180deg);
    }
    100% {
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
`;

const Driving = styled.div`
  margin: 20px;
  height: 100vh;
  width: 80%;
  background: url(${Bg});
  animation: drive 18s linear infinite;
  position: relative;

  @keyframes drive {
    from {
      background-position: bottom left;
    }
    to {
      background-position: bottom right;
    }
  }
  img:nth-child(1) {
    position: absolute;
    left: 300px;
    bottom: -10px;
    width: 200px;
  }
  img:nth-child(2) {
    position: absolute;
    left: 800px;
    bottom: -10px;
    width: 200px;
  }
`;

const BackgroundImage = styled.div`
  margin: 20px;
  height: 100vh;
  width: 80%;
  background: url(${Bg1});
  animation: animate-pattern 10s linear infinite;

  @keyframes animate-pattern {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 800px 0;
    }
  }
`;

const Heart = styled.div`
  margin: 50px;
  padding: 30px;
  position: relative;
  width: 100px;
  height: 100px;
  background: red;
  transform: rotate(45deg);
  animation: heartBeat 1.2s linear infinite;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: red;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: red;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  @keyframes heartBeat {
    0% {
      transform: rotate(45deg) scale(1);
    }
    25% {
      transform: rotate(45deg) scale(1);
    }
    30% {
      transform: rotate(45deg) scale(1.5);
    }
    50% {
      transform: rotate(45deg) scale(1.2);
    }
    70% {
      transform: rotate(45deg) scale(1.4);
    }
    100% {
      transform: rotate(45deg) scale(1);
    }
  }
`;

const Bounce = styled.div`
  margin: 20px;
  margin-top: 220px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 10px solid white;
    li {
      list-style: none;
      width: 30px;
      height: 30px;
      background: white;
      margin: 0 10px;
      border-radius: 50%;
      animation: jumping 0.8s linear infinite;

      :nth-child(1) {
        animation-delay: 0.45s;
      }
      :nth-child(2) {
        animation-delay: 0.6s;
      }
      :nth-child(3) {
        animation-delay: 0.2s;
      }
      :nth-child(4) {
        animation-delay: 0.8s;
      }
      :nth-child(5) {
        animation-delay: 0.4s;
      }
    }
  }

  @keyframes jumping {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
