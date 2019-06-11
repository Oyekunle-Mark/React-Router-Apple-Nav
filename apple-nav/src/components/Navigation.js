import React from "react";
import { Link } from 'react-router-dom';

import navLinkData from "../subNavImages";

export default function Navigation() {
  const links = navLinkData.map(link => (
    <Link key={link.id} to={`/${link.title.toLowerCase()}`}>
      {link.title}
    </Link>
  ));
  return <nav>{links}</nav>;
}
