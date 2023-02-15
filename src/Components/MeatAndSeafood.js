import React from "react";
import Items from "./Items";

export default function MeatAndSeafood({ productItems }) {
  return (
    <div className="item-display-container" id="meat-seafoods">
      <div>
        <h3>
          Meat & Sea Foods
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
