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

      <MenuWrapper>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Portofolio</a>
          <a href="">Contact</a>
        </nav>
      </MenuWrapper>
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
