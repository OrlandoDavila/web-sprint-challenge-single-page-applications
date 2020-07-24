
import React from "react";
import Order from "./Order";
import pizza from "./Assets/Pizza.jpg"

export default function Confirmation(props) {
  return (
    <div>
      <h2>WORRY NOT! Pizza come soon!</h2>
      <div>
        <img src={pizza} alt="pizza" />
      </div>
      {props.order && <Order order={props.order} />}
    </div>
  );
}