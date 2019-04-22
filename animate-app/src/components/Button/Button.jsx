import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <Container>
      <p style={{ textAlign: "center" }}>Buttons Component</p>
      <BtnWrapper>Css transition</BtnWrapper>
      <DivWrapper>Move with Ease</DivWrapper>
      <BtnWrapper1>Hover Me</BtnWrapper1>
      <BtnWrapper2>Hover Me2</BtnWrapper2>
      <BtnWrapper3>Hover Me3</BtnWrapper3>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  background-color: #ed8a63;
  margin: 0 auto;
`;

const BtnWrapper = styled.button`
  margin: 20px;
  height: 90px;
  width: 290px;
  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;
  /* transition-property: background-color color width; */
  /* transition-property: all;
  transition-duration: 3s; //we can use millisecond ex: 2000ms is the same
  transition-delay:2s
  */
  transition: background-color 3s, color 6s, border-radius 2s ease 2s,
    width 2s ease 1s;

  &:hover {
    background-color: green;
    color: black;
    width: 500px;
    border-radius: 50%;
  }
`;

const DivWrapper = styled.div`
  margin: 20px;
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 15px;
  line-height: 45px;
  // responsabile for changing the location of the div
  transition-property: translate();
  transition-duration: 3s;
  transition-timing-function: ease-in-out; //ease , linear ,ease-in , ease-out,ease-in-out
  &:hover {
    transform: translate(
      900px,
      0
    ); //it will move 700 px orizontaly and 0 verticaly
  }
`;

const BtnWrapper1 = styled.button`
  margin: 20px;
  text-decoration: none;
  color: #49494b;
  font-family: sans-serif;
  background-color: #7dce94;
  font-size: 45px;
  border: 5px solid #262626;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: pink;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 1s;
  }

  &:hover:before {
    transform: rotate(0deg);
  }
`;

const BtnWrapper2 = styled.button`
  margin: 20px;
  text-decoration: none;
  color: #351435;
  font-family: sans-serif;
  font-size: 40px;
  border: 3px solid #351435;
  padding: 40px 80px;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #351435;
    z-index: -1;
    transform: translateX(-100%);
    transition: all 1s;
  }

  &:hover:before {
    transform: translateY(0);
  }

  &:hover {
    color: white;
  }
`;

const BtnWrapper3 = styled.button`
  padding: 40px 80px;
  font-family: sans-serif;
  text-decoration: none;
  color: #262626;
  font-size: 45px;
  letter-spacing: 2px;
  border: 5px solid #262626;
  position: relative;
  transition: 1s;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: purple;
    z-index: -1;
    transition: 1s;
    transform: rotateX(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: purple;
    z-index: -1;
    transition: 1s;
    transform: rotateY(90deg);
  }

  &:hover:before {
    transform: rotateX(0deg);
  }

  &:hover:after {
    transform: rotateY(0deg);
  }

  &:hover {
    color: white;
  }
`;
