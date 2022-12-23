import React from "react";
import Cart from "./jsx/Cart";
import Header from "./jsx/Header";
import MyPurchases from "./jsx/MyPurchases";
import MyFavourites from "./jsx/MyFavourites";
import MainCol from "./jsx/MainCol";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const addToCart = (obj) => {
    axios.post("https://63959cf790ac47c6806f0140.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
    console.log(cartItems);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    axios
      .get("https://63959cf790ac47c6806f0140.mockapi.io/skeakers")
      .then((res) => setItems(res.data));

    axios
      .get("https://63959cf790ac47c6806f0140.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  return (
    <div className="wrapper">
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="line"></div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                {/* <div className="slider">SliderField</div> */}
                <div className="h1-search">
                  <h1>
                    {searchValue ? (
                      <h6>Поиск по запросу: "{searchValue}"</h6>
                    ) : (
                      "Все кроссовки"
                    )}
                  </h1>
                  <div className="search">
                    <img src="/img/search.svg" alt="" />
                    <input
                      onChange={onChangeSearchInput}
                      value={searchValue}
                      type="text"
                      placeholder="Поиск..."
                      className="search-input"
                    />
                  </div>
                </div>
                <div className="row">
                  {items
                    .filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((item) => (
                      <MainCol
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        name={item.name}
                        img={item.img}
                        onAddToCart={(obj) => addToCart(obj)}
                      />
                    ))}
                </div>
              </div>
            }
          />

          <Route path="/p" element={<MyPurchases />} />
          <Route path="/f" element={<MyFavourites />} />
        </Routes>
      </div>
      {cartOpened && (
        <Cart
          onRemove={(id) => onRemoveItem(id)}
          items={cartItems}
          onClickCart={() => setCartOpened(false)}
        />
      )}
    </div>
  );
}

export default App;
