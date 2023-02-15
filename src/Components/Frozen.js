import React from "react";
import Items from "./Items";

export default function Frozen({ productItems }) {
  return (
    <div className="item-display-container" id="frozen">
      <div>
        <h3>
          Frozen
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </h3>
      </div>
      <div className="container">
        {productItems.map((element, index) => {
          return (
            <Items
              index={index}
              image={element.image}
              name={element.name}
              price={element.price}
              weight={element.weight}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
}
