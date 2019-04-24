import React from "react";
import styled from "styled-components";
import cover3 from "../../assets/book3.jpg";
import cat from "../../assets/cat.jpg";
import cover2 from "../../assets/logo2.jpg";
import cover from "../../assets/star.jpg";
import star from "../../assets/star2.jpg";
import test from "../../assets/test.jpg";

const Image = () => {
  return (
    <Wrapper>
      {/* <p style={{ textAlign: "center" }}>Images Component</p> */}
      <Container>
        <WrapperImage1>
          <img src={cover} alt="" />
          <div>
            <h1>Title over here!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis
              consequuntur molestias. Consectetur voluptas, voluptatem enim,
              commodi incidunt sit dolores quos alias molestiae velit corrupti
              neque ipsum totam dignissimos eum.
            </p>
          </div>
        </WrapperImage1>

        <WrapperImage2>
          <img src={cover2} alt="" />
          <div>
            <h1>Title over here!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </WrapperImage2>

        <WrapperImage3>
          <img src={cover2} alt="" />
          <div>
            <h1>Title over here!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </WrapperImage3>

        <WrapperImage4>
          <img src={cover3} alt="" />
          <div>
            <h1>Title over here!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </WrapperImage4>

        <WrapperImage5>
          <img src={star} alt="" />
          <div>
            <h1>Title over here!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </WrapperImage5>

        <WrapperImage6>
          <img src={test} alt="" />
        </WrapperImage6>

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
  height: auto;
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
    transform: rotateY(180deg);
  }
`;

const WrapperImage1 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }

  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    h1 {
      text-transform: uppercase;
      margin: 0;
    }

    p {
      font-size: 18px;
      text-transform: capitalize;
      padding: 10px;
    }

    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  &:hover img {
    transform: scale(1.3) rotate(15deg);
  }
`;

const WrapperImage2 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  position: relative;
  transition: all 0.7s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }
  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    border: 2px solid purple;
    opacity: 0;
    transition: all 0.7s;
    transform: translateX(-100%);

    h1 {
      margin: 0;
      text-transform: uppercase;
    }
    p {
      font-size: 18px;
      text-transform: capitalize;
      padding: 10px;
    }
  }

  &:hover div {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    transform: translateX(0);
  }
  &:hover img {
    transform: scale(1.2) rotate(-10deg);
  }
`;

const WrapperImage3 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }

  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    transform: translateY(100%);

    h1 {
      text-transform: uppercase;
      margin: 0;
    }

    p {
      font-size: 18px;
      text-transform: capitalize;
      padding: 10px;
    }
  }
  &:hover img {
    transform: scale(1.3) rotate(15deg);
  }

  &:hover div {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(0);
  }
`;

const WrapperImage4 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  position: relative;
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
    transition: all 1s;
  }

  div {
    position: absolute;
    color: white;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    background-color: black;
    transform: translatex(-100%);
    p {
      width: 70%;
      margin: 0 auto;
    }
  }

  &:hover div {
    transform: translateX(0);
  }

  &:hover img {
    transform: translateX(100%);
  }
`;

const WrapperImage5 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
    height: 400px;
    transition: transform 1s;
  }

  div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    transform: translateY(100%);
    transition: all 1s;
    p {
      max-width: 85%;
    }
  }

  &:hover div {
    transform: translateY(0);
  }
  &:hover img {
    transform: translateY(-30%);
  }
`;

const WrapperImage6 = styled.div`
  margin: 20px;
  max-width: 300px;
  height: 400px;
  border: 5px solid white;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }

  &:hover img {
    transform: scale(1.2) rotate(9deg);
  }
`;
