import React from "react";

function Category({ title, img }) {
  return (
    <div className="destination_categoryCard">
      <img src={img} />
      <p>{title}</p>
    </div>
  );
}

export default Category;
