import React from "react";

function MainCol() {
  return (
    <div className="col">
      <div className="favourite-button">
        <img
          height="18"
          width="18"
          src="./img/favourites.svg"
          alt="favourites"
        />
      </div>
      <img height={112} width={133} src="./img/cross1.jpg" alt=""/>
      <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
      <div className="col__price">
        <div>
          <p>Цена:</p>
          <h5>12 999 руб.</h5>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default MainCol;
