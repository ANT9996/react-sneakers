import React from "react";
import Cart from "./jsx/Cart";
import Header from "./jsx/Header";
import Main from "./jsx/Main";
import MyPurchases from "./jsx/MyPurchases";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="line"></div>
      <div className="content">
        <Main />
        <MyPurchases />
      </div>
      {/* cart = display: none (flex)*/}
      <Cart />
    </div>
  );
}

export default App;
