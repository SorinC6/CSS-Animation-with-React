import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <NavWrapper>
        <NavLinkWrapper to="/buttons">Buttons</NavLinkWrapper>
        <NavLinkWrapper to="/images">Images</NavLinkWrapper>
        <NavLinkWrapper to="/stuff">More</NavLinkWrapper>
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
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 20px;
  background: #e1e8f0;

  &.active {
    color: red;
  }
`;
