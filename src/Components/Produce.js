import React from "react";
import "../Components/Combined.css";
import Items from "./Items";

export default function Produce({ productItems }) {
  return (
    <div className="item-display-container" id="produce">
      <div>
        <h3>
          Produce
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

export const id = "produce";
