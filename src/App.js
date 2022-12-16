import React from "react";
import Cart from "./jsx/Cart";
import Header from "./jsx/Header";
import Main from "./jsx/Main";
import MyPurchases from "./jsx/MyPurchases";
import MyFavourites from './jsx/MyFavourites';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="line"></div>
      <div className="content">
        <Main />
        {/* <MyPurchases /> */}
        {/* <MyFavourites /> */}
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default App;
