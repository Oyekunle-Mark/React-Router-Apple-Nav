import React from "react";
import Prop from "prop-types";
import { Link } from "react-router-dom";

export default function Navigation({ data }) {
  const links = data.map(link => (
    <Link key={link.id} to={`/${link.title.toLowerCase()}`}>
      {link.title}
    </Link>
  ));
  return <div>{links}</div>;
}

Navigation.propTypes = {
  data: Prop.arrayOf(Prop.object).isRequired
};
