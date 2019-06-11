import React from "react";
import { Route, Link } from "react-router-dom";

import navLinkData from "../subNavImages";

export default function SubNavigation() {
  const subnavs = navLinkData.map(link => (
    <Route
      path={`/${link.title.toLowerCase()}`}
      render={props => <SubLink {...props} deviceList={link.subLink} />}
    />
  ));

  return <div>{subnavs}</div>;
}

function SubLink({ deviceList }) {
  const devices = deviceList.map(device => (
    <Link to="#">
      <img src={device.imageUrl} alt={device.title} />
      <p>{device.title}</p>
      {device.new && <p>New</p>}
    </Link>
  ));

  return <div>{devices}</div>;
}
