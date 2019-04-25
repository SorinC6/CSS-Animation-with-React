import React from "react";
import styled from "styled-components";

const More = () => {
  return (
    <Container>
      <p>More</p>
      <DivWrapper />
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
`;

const DivWrapper = styled.div`
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
