import React from "react";
import Prop from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navigation({ data }) {
  const links = data.map(link => (
    <NavLink
      activeClassName="active"
      key={link.id}
      to={`/${link.title.toLowerCase()}`}
    >
      {link.title}
    </NavLink>
  ));
  return <div>{links}</div>;
}

Navigation.propTypes = {
  data: Prop.arrayOf(Prop.object).isRequired
};
