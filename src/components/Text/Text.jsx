import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Container>
      <TextWrapTest>
        <ul>
          <li>S</li>
          <li>O</li>
          <li>R</li>
          <li>I</li>
          <li>N</li>
        </ul>
      </TextWrapTest>

      <MenuWrapper>
        <nav>
          <a href="#t">Home</a>
          <a href="#t">About</a>
          <a href="#t">Service</a>
          <a href="#t">Portofolio</a>
          <a href="#t">Contact</a>
        </nav>
      </MenuWrapper>

      <TextWrapper>
        <h2>
          CHIS SORIN <br /> Full Stack Developer
        </h2>
      </TextWrapper>
      <TextWrapper1>
        I Love Css <span />
      </TextWrapper1>

      <TextWrap>
        <ul>
          <li>L</li>
          <li>A</li>
          <li>M</li>
          <li>B</li>
          <li>D</li>
          <li>A</li>
        </ul>
      </TextWrap>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  background-color: darkkhaki;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapTest = styled.div`
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
    &:hover li {
      transform: rotate(45deg) translateY(-200px);
      opacity: 0;
      filter: blur(20px);
    }
  }
`;

const MenuWrapper = styled.div`
  margin: 70px 20px;
  padding: 10px;

  nav {
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    font-size: 32px;

    a {
      text-decoration: none;
      color: darkolivegreen;
      padding: 10px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3%;
        background-color: red;
        transform: scaleX(0);
        transition: all 0.5s;
        transform-origin: left;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3%;
        background-color: red;
        transform: scaleX(0);
        transition: all 0.5s;
        transform-origin: right;
      }
      &:hover:before {
        transform: scaleX(1);
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
  }
`;

const TextWrapper = styled.div`
  h2 {
    text-align: center;
    color: purple;
    font-family: arial;
    font-size: 90px;
    letter-spacing: 15px;
    text-shadow: 0 1px 0 #efefef, 0 2px 0 #efefef, 0 3px 0 #efefef,
      0 4px 0 #efefef, 0 30px 5px rgba(0, 0, 0, 0.1);
    animation: float 2s linear infinite;
    animation-direction: alternate;
  }

  @keyframes float {
    from {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(-5deg);
    }
  }
`;

const TextWrapper1 = styled.h1`
  text-align: center;
  font-size: 60px;

  span:before {
    content: "TRANSITION";
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    color: darkslateblue;
    animation: words 6s infinite;
  }

  @keyframes words {
    0% {
      content: "transition";
    }
    50% {
      content: "animation";
    }
    100% {
      content: "transforms";
    }
  }
`;

const TextWrap = styled.div`
  ul {
    display: flex;

    li {
      list-style: none;
      color: lightgrey;
      font-size: 80px;
      letter-spacing: 15px;
      animation: lighting 2s linear infinite;

      &:nth-child(1) {
        animation-delay: 0;
      }
      &:nth-child(2) {
        animation-delay: 0.1s;
      }
      &:nth-child(3) {
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        animation-delay: 0.3s;
      }
      &:nth-child(5) {
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        animation-delay: 0.5s;
      }

      &:nth-child(8) {
        animation-delay: 0.7s;
      }
      &:nth-child(9) {
        animation-delay: 0.8s;
      }
    }
  }

  @keyframes lighting {
    0% {
      color: grey;
      text-shadow: none;
    }
    90% {
      color: grey;
      text-shadow: none;
    }
    100% {
      color: yellow;
      text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
  }
`;
