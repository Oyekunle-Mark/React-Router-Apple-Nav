import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";
import data from "./data";

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.897);
    margin: 10px 30px;
    font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
  }

  a:hover {
    color: rgba(235, 235, 235, 0.616);
  }

  background: rgba(3, 4, 5, 0.815);

  img {
    width: 24px;
    height: 24px;
  }

  .active {
    color: rgba(235, 235, 235, 0.616);
  }
`;

function App() {
  return (
    <nav>
      <StyledNavigation>
        <NavLink activeClassName="active" to="/">
          <img
            src="https://image.flaticon.com/icons/svg/179/179309.svg"
            alt="apple-logo"
          />
        </NavLink>

        <Navigation data={data} />

        <NavLink activeClassName="active" to="/support">
          Support
        </NavLink>
      </StyledNavigation>

      <SubNavigation data={data} />
    </nav>
  );
}

export default App;
