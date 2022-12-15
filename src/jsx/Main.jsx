import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="slider">SliderField</div>
      <div className="h1-search">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="/img/search.svg" />
          <input type="text" placeholder="Поиск..." className="search-input"/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img height={112} width={133} src="./img/cross1.jpg" />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="col__price">
            <div>
              <p>Цена:</p>
              <h5>12 999 руб.</h5>
            </div>
            <button></button>
          </div>
        </div>
        <div className="col">
          <img height={112} width={133} src="./img/cross1.jpg" />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="col__price">
            <div>
              <p>Цена:</p>
              <h5>12 999 руб.</h5>
            </div>
            <button></button>
          </div>
        </div>

        <div className="col">
          <img height={112} width={133} src="./img/cross1.jpg" />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="col__price">
            <div>
              <p>Цена:</p>
              <h5>12 999 руб.</h5>
            </div>
            <button></button>
          </div>
        </div>

        <div className="col">
          <img height={112} width={133} src="./img/cross1.jpg" />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="col__price">
            <div>
              <p>Цена:</p>
              <h5>12 999 руб.</h5>
            </div>
            <button></button>
          </div>
        </div>

        <div className="col">
          <img height={112} width={133} src="./img/cross1.jpg" />
          <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="col__price">
            <div>
              <p>Цена:</p>
              <h5>12 999 руб.</h5>
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
