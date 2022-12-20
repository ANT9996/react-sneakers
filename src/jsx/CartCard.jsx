import React from "react";

function CartCard(props) {

  return (
    <div className="col">
      <img src={props.img} alt="" />
      <div className="col-info">
        <h5>{props.name}</h5>
        <p>{props.price} руб.</p>
      </div>
      <button></button>
    </div>
  );
}

export default CartCard;
