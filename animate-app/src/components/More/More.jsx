import React from "react";
import styled from "styled-components";
import Bg from "../../assets/bg.jpg";
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
  perspective: 200px;
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
