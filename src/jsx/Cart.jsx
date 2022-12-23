import React from "react";
import CartCard from "./CartCard";

function Cart(props) {

  const [cost, setCost] = React.useState(0)
  React.useEffect(() => {
    setCost(0)
    props.items.map(item => setCost(prev => Number(prev)+Number(item.price)))
  }, [props.items]);

  return (
    <div className="cart">
      <div className="cart-rightSide-bg">
        <div className="items">
          <div className="items-row">
            <h2>
              <span>Корзина</span>
              <span onClick={props.onClickCart} className="closeCart">
                ✖
              </span>
            </h2>
            <div className="row">
              {props.items.map((item, i) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  onRemove={(id) => props.onRemove(id)}
                />
              ))}
            </div>
          </div>
          <div className="items-prices">
            <div className="price-value">
              <div>Итого: </div>
              <div className="w-100"></div>
              <div> {cost} руб.</div>
            </div>
            <div className="price-nalog">
              <div>Налог 5%: </div>
              <div className="w-100"></div>
              <div>{(Number(cost)*0.05)} руб.</div>
            </div>
            <button className="green-button">
              Оформить заказ <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
