import React from "react";
import Prop from "prop-types";
import { Link } from "react-router-dom";

export default function SubLink({ deviceList }) {
  const devices = deviceList.map(device => (
    <Link to="#">
      <img src={device.imageUrl} alt={device.title} />
      <p>{device.title}</p>
      {device.new && <p className="new">New</p>}
    </Link>
  ));

  return <>{devices}</>;
}

SubLink.propTypes = {
  deviceList: Prop.arrayOf(Prop.object).isRequired
};
