import React from "react";
import Prop from "prop-types";
import { Route } from "react-router-dom";
import styled from "styled-components";

import SubLink from "./SubLink";

const StyledSubNavigation = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(241, 241, 241);
  padding-bottom: 15px;

  a {
    text-decoration: none;
    color: initial;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 15px 23px 5px 23px;
  }

  p {
    font-family: sans-serif;
    font-size: 10px;
    font-weight: lighter;
    text-align: center;
  }

  .new {
    color: rgb(239, 86, 2);
  }
`;

export default function SubNavigation({ data }) {
  const subnavs = data.map(link => (
    <Route
      path={`/${link.title.toLowerCase()}`}
      render={props => <SubLink {...props} deviceList={link.subLink} />}
    />
  ));

  return <StyledSubNavigation>{subnavs}</StyledSubNavigation>;
}

SubNavigation.propTypes = {
  data: Prop.arrayOf(Prop.object).isRequired
};
