import React from "react";
import CartCard from "./CartCard";
import AppContext from "../context";

function Cart(props) {
  const { items, cartItems } = React.useContext(AppContext);
  const [cost, setCost] = React.useState(0);
  const costVal = cartItems.reduce(
    (sum, obj) => Number(obj.price) + Number(sum),
    0
  );

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
            {cartItems.length > 0 && (
              <div className="row">
                {cartItems.map((item) => (
                  <CartCard
                    key={item.id}
                    {...item}
                    onRemove={(id) => props.onRemove(id)}
                  />
                ))}
              </div>
            )}
            <div className="cartEmptyContainer">
              <div className="cartEmpty">
                <img
                  width={120}
                  height={120}
                  src="./img/empty-cart.png"
                  alt=""
                />
                <h3>Корзина пустая</h3>
                <h5>
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </h5>
                <button>
                  <span>
                    <img src="./img/arrow.svg" alt="" />
                  </span>
                  <span>Вернуться назад</span>
                </button>
              </div>
            </div>
          </div>
          {cartItems.length > 0 && (
            <div className="items-prices">
              <div className="price-value">
                <div>Итого: </div>
                <div className="w-100"></div>
                <div> {costVal} руб.</div>
              </div>
              <div className="price-nalog">
                <div>Налог 5%: </div>
                <div className="w-100"></div>
                <div>{(Number(costVal) * 0.05).toFixed(2)} руб.</div>
              </div>
              <button className="green-button">
                <span>
                  <img src="./img/arrow.svg" alt="" />
                </span>
                <span>Оформить заказ</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
