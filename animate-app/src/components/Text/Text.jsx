import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Container>
      <ul>
        <li>S</li>
        <li>O</li>
        <li>R</li>
        <li>I</li>
        <li>N</li>
      </ul>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  background-color: darkkhaki;
  height: 1000px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    li {
      list-style: none;
      color: white;
      font-size: 100px;
      font-weight: bold;
      letter-spacing: 20px;
      transition: 2s;

      &:nth-child(1) {
        transition-delay: 0;
      }
      &:nth-child(2) {
        transition-delay: 0.4s;
      }
      &:nth-child(3) {
        transition-delay: 0.8s;
      }
      &:nth-child(4) {
        transition-delay: 1.2s;
      }
      &:nth-child(5) {
        transition-delay: 1.6s;
      }
    }
  }

  &:hover li {
    transform: rotate(45deg) translateY(-200px);
    opacity: 0;
    filter: blur(20px);
  }
`;
