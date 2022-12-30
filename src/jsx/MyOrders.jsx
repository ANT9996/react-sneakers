import React from "react";
import { Link } from "react-router-dom";
import AppContext from "./../context";
function MyOrders() {
  const { orderItems } = React.useContext(AppContext);
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <Link to={"/"} className={"gerge"}>
          <button></button>
        </Link>
        <h1>Мои покупки</h1>
      </div>
      <div className="row">
        {orderItems.map((item) => (
          <div className="col">
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
            <div className="col__price">
              <div>
                <p>Цена:</p>
                <h5>{item.price} руб.</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
