import React from "react";
import styled from "styled-components";

const More = () => {
  return (
    <Container>
      <p>More</p>
    </Container>
  );
};

export default More;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  background-color: #ed8a63;
  margin: 0 auto;
`;
