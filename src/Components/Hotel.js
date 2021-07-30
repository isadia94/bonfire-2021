import React from "react";
import "./Hotel.css";
function Hotel({ img, title, rating, location, price }) {
  return (
    <div className="hotel">
      <div className="hotel__image">
        <img src={img} alt="" />
      </div>
      <div className="hotel__info">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Hotel;
