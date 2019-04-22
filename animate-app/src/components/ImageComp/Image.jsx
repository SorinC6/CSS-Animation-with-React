import React from "react";
import styled from "styled-components";
import cat from "../../assets/cat.jpg";

const Image = () => {
  return (
    <Wrapper>
      {/* <p style={{ textAlign: "center" }}>Images Component</p> */}
      <Container>
        <ImgWrapper src={cat} alt="" />
        <ImgWrapper2 src={cat} alt="" />
        <ImgWrapper3 src={cat} alt="" />
        <ImgWrapper4 src={cat} alt="" />
        <ImgWrapper5 src={cat} alt="" />
        <ImgWrapper6 src={cat} alt="" />
        <ImgWrapper7 src={cat} alt="" />
      </Container>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  background-color: #7fdbff;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 82%;
  margin: 0 auto;
  background-color: #7fdbff;
  perspective: 500px;
`;

const ImgWrapper = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 10px;
  transition: transform 2s;
  &:hover {
    transform: translate(700px, 100px);
  }
`;

const ImgWrapper2 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 10px;
  transition: transform 2s;
  &:hover {
    /* transform: scaleX(2.9); //increase
    transform: scaleX(0.5); //decrease */
    /* transform: scaleY(2); */
    transform: scale(2, 2);
  }
`;

const ImgWrapper3 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 10px;
  transition: transform 2s;
  &:hover {
    /* transform: rotate(360deg); */
    transform: rotate(2turn);
  }
`;

const ImgWrapper4 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 10px;
  transition: transform 4s;
  &:hover {
    /* transform: skewY(50deg); */
    transform: skew(180deg, 180deg);
  }
`;

const ImgWrapper5 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 3px;
  transition: transform 1s;
  transform-origin: top;
  transform-origin: top left;
  &:hover {
    transform: rotate(20deg);
  }
`;

const ImgWrapper6 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 3px;
  transition: transform 1s;

  &:hover {
    transform: translateZ(300px);
  }
`;

const ImgWrapper7 = styled.img`
  margin: 20px;
  width: 250px;
  height: auto;
  border-radius: 3px;
  transition: transform 1s;

  &:hover {
    transform: rotatey(180deg);
  }
`;
