import React from "react";
import Cart from "./jsx/Cart";
import Header from "./jsx/Header";
import MyPurchases from "./jsx/MyPurchases";
import MyFavourites from "./jsx/MyFavourites";
import MainCol from "./jsx/MainCol";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const addToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
    console.log(cartItems);
  };

  React.useEffect(() => {
    fetch("https://63959cf790ac47c6806f0140.mockapi.io/skeakers")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="line"></div>
      <div className="content">
        <div className="main">
          {/* <div className="slider">SliderField</div> */}
          <div className="h1-search">
            <h1>Все кроссовки</h1>
            <div className="search">
              <img src="/img/search.svg" alt="" />
              <input
                type="text"
                placeholder="Поиск..."
                className="search-input"
              />
            </div>
          </div>
          <div className="row">
            {items.map((item, i) => (
              <MainCol
                key={i}
                id={item.id}
                price={item.price}
                name={item.name}
                img={item.img}
                onAddToCart={(obj) => addToCart(obj)}
              />
            ))}
          </div>
        </div>
        {/* <MyPurchases /> */}
        {/* <MyFavourites /> */}
      </div>
      {cartOpened && (
        <Cart items={cartItems} onClickCart={() => setCartOpened(false)} />
      )}
    </div>
  );
}

export default App;
