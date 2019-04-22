import React from "react";
import styled from "styled-components";
import cat from "../../assets/cat.jpg";
import cover from "../../assets/star.jpg";

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
  width: 300px;
  height: 400px;
  position: relative;
  border: 1px solid black;
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
