import React from "react";
import Hotel from "./Hotel";
import "./Stays.css";
import beach from "../images/beach.jpg";

function Stays() {
  return (
    <div className="popular__stays">
      <h4>Great Stays</h4>
      <div className="popular__all">
        <h5>Popular Hotels</h5>
        <a href="#" className="view__all">
          View all
        </a>
      </div>

      <div className="filter__section">
        <div>
          <input type="text" className="venue" />
        </div>
        <div className="date__numberRooms">
          <input type="text" />
          <input type="text" />
        </div>
      </div>

      <div className="hotels">
        <Hotel img={beach} title="Raddisson Blue" />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </div>
  );
}

export default Stays;
