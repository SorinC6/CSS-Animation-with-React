import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <NavWrapper>
        <NavLinkWrapper to="/buttons">Buttons</NavLinkWrapper>
        <NavLinkWrapper exact to="/">Images</NavLinkWrapper>
        <NavLinkWrapper to="/text">Text</NavLinkWrapper>
        <NavLinkWrapper to="/more">More</NavLinkWrapper>
      </NavWrapper>
    </>
  );
};

//For Nav link we cand use instead of active
/**
 * <NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
 */

export default Home;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 80px 0;
  background-color: #9068be;
`;

const NavLinkWrapper = styled(NavLink)`
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 20px;
  background: #e1e8f0;
  border-radius: 5px;
  color: purple;
  font-size: 15px;
  transition: background-color 3s, color 2s, font-size 1s,
    border-radius 3s ease 1s;
  &.active {
    color: black;
    background-color: #6ed3cf;
    font-size: 20px;
    border-radius: 50%;
  }
  @keyframes sds {
    
  }
`;

//dfdfdf
