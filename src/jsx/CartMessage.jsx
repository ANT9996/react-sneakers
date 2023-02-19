import React from "react";
import arrowIcon from '../assets/img/arrow.svg'

function CartMessage({name, description, img, func}) {
  return (
    <div className="cartEmptyContainer">
      <div className="cartEmpty">
        <img width={120} height={120} src={img} alt="" />
        <h3>{name}</h3>
        <h5>{description}</h5>
        <button onClick={func}>
          <span>
            <img src={arrowIcon} alt="" />
          </span>
          <span>Вернуться назад</span>
        </button>
      </div>
    </div>
  );
}

export default CartMessage;
