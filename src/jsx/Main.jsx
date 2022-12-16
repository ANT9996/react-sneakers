import React from "react";
import MainCol from "./MainCol";

function Main() {
  return (
    <div className="main">
      <div className="slider">SliderField</div>
      <div className="h1-search">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img src="/img/search.svg" alt=""/>
          <input type="text" placeholder="Поиск..." className="search-input" />
        </div>
      </div>
      <div className="row">
        <MainCol />
      </div>
    </div>
  );
}

export default Main;
