import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>Buttons Component</p>
      <BtnWrapper>Css transition</BtnWrapper>
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
  transition-property: background-color;
  transition-duration: 2s; //we can use millisecond ex: 2000ms is the same

  &:hover {
    background-color: green;
  }
`;
