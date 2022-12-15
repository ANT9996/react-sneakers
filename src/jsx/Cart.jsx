import React from 'react';

function Cart() {
    return (
        <div className="cart">
        <div className="cart-rightSide-bg">
          <div className="items">
            <div className="items-row">
              <h2>Корзина</h2>
              <div className="row">
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
                <div className="col">
                  <img height={70} width={70} src="./img/cross1.jpg" />
                  <div className="col-info">
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <p>12 999 руб.</p>
                  </div>
                  <button></button>
                </div>
              </div>
            </div>
            <div className="items-prices">
              <div className="price-value">
                <div>Итого: </div>
                <div>21 498 руб.</div>
              </div>
              <div className="price-nalog">
                <div>Налог 5%: </div>
                <div>1074 руб.</div>
              </div>
              <button className="green-button">
                Оформить заказ <img src="./img/arrow.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cart;