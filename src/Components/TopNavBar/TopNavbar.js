import React from "react";
import "./TopNavbar.css";
import { useSelector } from "react-redux";

export default function TopNavbar() {
  const { cartValue } = useSelector((state) => state.custom);

  return (
    <>
      <div className="topnavbar">
        <div className="heading">
          <h3>E-Commerce</h3>
        </div>
        <div className="cart">
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>
            <p>{cartValue}</p>
          </span>
        </div>
      </div>
    </>
  );
}
