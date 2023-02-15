import React, { useState } from "react";
import "../Components/Combined.css";

import { useDispatch } from "react-redux";

export default function Items(props) {
  const [icon, changeIcon] = useState("plus");

  const dispatch = useDispatch();

  const toggel = () => {
    if (icon === "plus") {
      changeIcon("minus");
    } else {
      changeIcon("plus");
    }
  };

  const add_sub = () => {
    if (icon === "plus") {
      incrementBtn();
    } else {
      decrementBtn();
    }
    toggel();
  };

  const incrementBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrementBtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div className="items">
      <div key={props.index}>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p>{props.price}</p>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p style={{ color: "#b6bac3" }}>{props.weight}</p>
      </div>
      <i
        className={`fa-solid fa-circle-${icon} fa-2x addtocart`}
        onClick={(e) => {
          add_sub();
        }}
      ></i>
    </div>
  );
}
