import React from "react";
import Cart from "./jsx/Cart";
import Header from "./jsx/Header";
import MyFavourites from "./jsx/MyFavourites";
import MainCol from "./jsx/MainCol";
import MyOrders from "./jsx/MyOrders";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context.js";
import ContentLoader from "react-content-loader";
import MyLoader from "./jsx/MyLoader";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cardLoading, setCardLoading] = React.useState(true);
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const addToCart = (obj) => {
    axios.post(`https://63959cf790ac47c6806f0140.mockapi.io/cart`, obj);
    setCartItems((prev) => [...prev, obj]);
    console.log(obj);
  };

  const onAddToFavourite = (obj) => {
    axios.post(`https://63959cf790ac47c6806f0140.mockapi.io/favourites`, obj);
    setFavouriteItems((prev) => [...prev, obj]);
    console.log(obj);
  };

  const onRemoveItem = (id) => {
    const findItem = cartItems.find(item => item.parentId === id);
    axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/cart/${findItem.id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.parentId) !== Number(id))
    );
  };

  const onRemFromFavourite = (id) => {
    const findItem = favouriteItems.find(item => item.parentId === id);
    axios.delete(`https://63959cf790ac47c6806f0140.mockapi.io/favourites/${findItem.id}`);
    setFavouriteItems((prev) => prev.filter((item) => item.parentId !== id));
  };

  React.useEffect(() => {
    async function fetchData() {
      const skeakersData = await axios.get(
        "https://63959cf790ac47c6806f0140.mockapi.io/skeakers"
      );
      const cartData = await axios.get(
        "https://63959cf790ac47c6806f0140.mockapi.io/cart"
      );
      const favouriteData = await axios.get(
        "https://63959cf790ac47c6806f0140.mockapi.io/favourites"
      );

      setItems(skeakersData.data);
      setCartItems(cartData.data);
      setFavouriteItems(favouriteData.data);
      setCardLoading(false);
    }
    fetchData();
  }, []);

  if (cartOpened) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "overlay";
  }

  return (
    <AppContext.Provider
      value={{ items, cartItems, favouriteItems, cardLoading }}
    >
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
                    {cardLoading === false ? (
                      items
                        .filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        )
                        .map((item) => (
                          <MainCol
                            key={item.id}
                            {...item}
                            onAddToCart={(obj) => addToCart(obj)}
                            onAddToFavourite={(obj) => onAddToFavourite(obj)}
                            onRemFromFavourite={(id) => onRemFromFavourite(id)}
                            onRemoveItem={(id, name) => onRemoveItem(id, name)}
                          />
                        ))
                    ) : (
                      <>
                        {[...Array(10)].map(() => (
                          <div className="col">
                            <MyLoader />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              }
            />

            <Route path="/orders" element={<MyOrders />} />
            <Route
              path="/favourites"
              element={
                <MyFavourites
                  onRemFromFavourite={(id) => onRemFromFavourite(id)}
                />
              }
            />
          </Routes>
        </div>
        {cartOpened && (
          <Cart
            onRemove={(id) => onRemoveItem(id)}
            onClickCart={() => setCartOpened(false)}
          />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
