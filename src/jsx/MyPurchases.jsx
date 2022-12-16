import React from "react";
import MainCol from "./MainCol";

function MyPurchases() {
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <button></button>
        <h1>Мои покупки</h1>
      </div>
      <div className="row">
        <MainCol />
      </div>
    </div>
  );
}

export default MyPurchases;
