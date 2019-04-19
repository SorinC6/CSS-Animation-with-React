import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className="normal" activeClassName="active">
          Buttons
        </NavLink>
        <NavLink>Images</NavLink>
        <NavLink>More</NavLink>
      </nav>
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
