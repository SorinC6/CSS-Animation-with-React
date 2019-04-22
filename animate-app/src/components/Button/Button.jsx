import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <Container>
      <BtnWrapper>Css transition</BtnWrapper>
      <DivWrapper>Move with Ease</DivWrapper>
      <BtnWrapper1>Hover Me</BtnWrapper1>
      <BtnWrapper2>Hover Me2</BtnWrapper2>
      <BtnWrapper3>Hover Me3</BtnWrapper3>
      <BtnWrapper4>Hover Me4</BtnWrapper4>
      <BtnWrapper5>Hover Me5</BtnWrapper5>
      <BtnWrapper6>Hover Me6</BtnWrapper6>
      <BtnWrapper7>Hover Me7</BtnWrapper7>
      <BtnWrapper8>Hover Me8</BtnWrapper8>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
const BtnWrapper4 = styled.button`
  margin: 20px;
  outline: none;
  padding: 40px 80px;
  color: green;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -2px;
  transition: all 0.5s;
  border: 3px solid blueviolet;
  &:hover {
    font-weight: 900;
    letter-spacing: 10px;
    border: 7px solid blueviolet;
  }
`;

const BtnWrapper5 = styled.button`
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
    content: "New Stuff";
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #351435;
    transform: translateY(-100%);
    transition: all 1s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover:before {
    transform: translateY(0);
  }

  &:hover {
    color: white;
  }
`;

const BtnWrapper6 = styled.button`
  outline: none;
  color: black;
  font-size: 40px;
  border: 3px solid white;
  padding: 40px 80px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: red;
  }

  &:before {
    content: "";
    background-color: lightgrey;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.5s;
  }
  &:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
`;

const BtnWrapper7 = styled.button`
  outline: none;
  background-color: darkgreen;
  font-size: 40px;
  border: 4px solid darkgreen;
  padding: 40px 80px;
  position: relative;
  color: transparent;
  overflow: hidden;

  &:before {
    content: "Hover Meee";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: black;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  &:after {
    content: "New Stuff";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: black;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: translate(-100%, 100%);
  }

  &:hover:before {
    transform: translate(100%, -100%);
  }
  &:hover:after {
    transform: translate(0, 0);
  }
`;

const BtnWrapper8 = styled.a`
  color: blue;
  text-decoration: none;
  font-size: 40px;
  border: 3px solid darkorchid;
  padding: 40px 80px;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:before {
    content: "Hover me";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: darkgrey;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(5);
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;
