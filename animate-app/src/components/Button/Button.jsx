import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>Buttons Component</p>
      <BtnWrapper>Css transition</BtnWrapper>
      <DivWrapper>Move with Ease</DivWrapper>
    </>
  );
};

export default Button;

const BtnWrapper = styled.button`
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
