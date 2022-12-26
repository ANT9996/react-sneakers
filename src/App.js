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
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const addToCart = (obj) => {
    axios.post("https://63959cf790ac47c6806f0140.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavourite = (obj) => {
    axios.post("https://63959cf790ac47c6806f0140.mockapi.io/favourites", obj);
    setFavouriteItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onRemFromFavourite = (id) => {
    axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/favourites/${id}`);
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    axios
      .get("https://63959cf790ac47c6806f0140.mockapi.io/skeakers")
      .then((res) => setItems(res.data));

    axios
      .get("https://63959cf790ac47c6806f0140.mockapi.io/cart")
      .then((res) => setCartItems(res.data));

    axios
      .get("https://63959cf790ac47c6806f0140.mockapi.io/favourites")
      .then((res) => setFavouriteItems(res.data));
  }, []);

  if (cartOpened) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "overlay";
  }

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
                        {...item}
                        isFavourite={item.isFavourite}
                        isCarted={item.isCarted}
                        onAddToCart={(obj) => addToCart(obj)}
                        onAddToFavourite={(obj) => onAddToFavourite(obj)}
                        onRemFromFavourite={(id) => onRemFromFavourite(id)}
                        onRemoveItem={(id) => onRemoveItem(id)}
                      />
                    ))}
                </div>
              </div>
            }
          />

          <Route path="/p" element={<MyPurchases />} />
          <Route
            path="/f"
            element={
              <MyFavourites
                items={favouriteItems}
                onRemFromFavourite={(id) => onRemFromFavourite(id)}
              />
            }
          />
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
