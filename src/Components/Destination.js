import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Destination({ title, location, image }) {
  return (
    <div className="destination_card">
      <img src={image} />
      <div className="destination_info">
        <h5>{title}</h5>
        <div className="location">
          <LocationOnIcon className="location_icon" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
