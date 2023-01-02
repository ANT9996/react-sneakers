import React from "react";
import CartCard from "./CartCard";
import AppContext from "../context";
import CartMessage from "./CartMessage";
import axios from "axios";

function Cart(props) {
  const { cartItems, setCartOpened, setCartItems } =
    React.useContext(AppContext);
  const [isOrdered, setIsOredered] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        `https://63959cf790ac47c6806f0140.mockapi.io/orders`,
        {items: cartItems}
      );
      // console.log(cartItems);
      setOrderId(data.id);
      setIsOredered(true);
      setCartItems([]);
      
      for (let i = cartItems.length; i > 0; i--) {
        // const item = cartItems[i];
        // const {id} = cartItems.find(obj => obj.parentId === item.id);
        await axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/cart/`+i)
      }

    } catch (err) {
      alert('Не удалось отпрвить заказ')
    }
  };
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
            {isOrdered ? (
              <CartMessage
                name={"Заказ оформлен!"}
                description={
                  `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                }
                img={"./img/ordered.png"}
                func={() => setIsOredered(false)}
              />
            ) : (
              cartItems.length > 0 && (
                <div className="row">
                  {cartItems.map((item) => (
                    <CartCard
                      key={item.id}
                      {...item}
                      onRemove={(id) => props.onRemove(id)}
                    />
                  ))}
                </div>
              )
            )}
            {!(cartItems.length > 0) && (
              <CartMessage
                name={"Корзина пустая"}
                description={
                  "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                }
                img={"./img/empty-cart.png"}
                func={() => setCartOpened(false)}
              />
            )}
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
              <button className="green-button" onClick={onClickOrder}>
                <span>
                  <img src="img/arrow.svg" alt="" />
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
