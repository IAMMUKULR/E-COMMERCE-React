import React, { useState } from "react";
import "./SideNavBar.css";
export default function SideNavBar(props) {
  let li1 = (
    <li>
      <a href="/produce">Prepared foods</a>
    </li>
  );
  let li2 = (
    <li>
      <a href="/prepared-foods">Prepared foods</a>
    </li>
  );
  let li7 = (
    <li>
      <a href="/canned">Canned Foods & Soups</a>
    </li>
  );
  let li3 = (
    <li>
      <a href="/bakery">Bakery</a>
    </li>
  );
  let li4 = (
    <li>
      <a href="/dairy-eggs">Dairy & Eggs</a>
    </li>
  );
  let li5 = (
    <li>
      <a href="/frozen">Frozen</a>
    </li>
  );
  let li6 = (
    <li>
      <a href="/meat-seafoods">Meat & Seafoods</a>
    </li>
  );

  const scrollValue = props.scroll;
  console.log(scrollValue);

  if (scrollValue >= 0 && scrollValue <= 300) {
    li1 = (
      <li className="active">
        <a href="/produce">Prepared foods</a>
      </li>
    );
  } else if (scrollValue >= 301 && scrollValue <= 600) {
    li2 = (
      <li className="active">
        <a href="/prepared-foods">Prepared foods</a>
      </li>
    );
  } else if (scrollValue >= 601 && scrollValue <= 900) {
    li7 = (
      <li className="active">
        <a href="/canned">Canned Foods & Soups</a>
      </li>
    );
  } else if (scrollValue >= 901 && scrollValue <= 1300) {
    li3 = (
      <li className="active">
        <a href="/bakery">Bakery</a>
      </li>
    );
  } else if (scrollValue >= 1301 && scrollValue <= 1600) {
    li4 = (
      <li className="active">
        <a href="/dairy-eggs">Dairy & Eggs</a>
      </li>
    );
  } else if (scrollValue >= 1601 && scrollValue <= 1940) {
    li5 = (
      <li className="active">
        <a href="frozen">Frozen</a>
      </li>
    );
  } else if (scrollValue >= 1941) {
    li5 = (
      <li className="active">
        <a href="frozen">Frozen</a>
      </li>
    );
  }

  return (
    <div className="sideNavbar">
      <div className="scroll-bar">
        <div className="lists">
          <ul>
            {li1}
            {li2}
            {li7}
            {li3}
            {li4}
            {li5}
            {li6}
          </ul>
        </div>
      </div>
    </div>
  );
}
