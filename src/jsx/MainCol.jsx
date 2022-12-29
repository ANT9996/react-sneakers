import React from "react";
import AppContext from "./../context";
import ContentLoader from "react-content-loader";

function MainCol({
  id,
  name,
  price,
  img,
  onAddToCart,
  onAddToFavourite,
  onRemFromFavourite,
  onRemoveItem,
  isFavourite = false,
  isCarted = false,
}) {
  const [checked, setChecked] = React.useState(isCarted);
  const [favourite, setFavourite] = React.useState(isFavourite);
  const { cartItems, favouriteItems, cardLoading } =
    React.useContext(AppContext);

  const onClickCart = () => {
    if (checked === false) {
      onAddToCart({ id, name, price, img });
    } else {
      onRemoveItem(id, name);
    }
    setChecked(!checked);
  };

  React.useEffect(() => {
    setChecked(cartItems.some((item) => item.id === id));
  }, [cartItems]);

  React.useEffect(() => {
    setFavourite(favouriteItems.some((item) => item.id === id));
  }, [favouriteItems]);

  const onClickFavourite = () => {
    if (favourite === false) {
      onAddToFavourite({ id, name, price, img });
    } else {
      onRemFromFavourite(id);
    }
    setFavourite(!favourite);
  };

  return (
    <>
      {cardLoading ? (
        <div className="col">
        <ContentLoader
          speed={3}
          width={252}
          height={252}
          viewBox="0 0 252 252"
          backgroundColor="#d1fff0"
          foregroundColor="#fff0d1"
        >
          <rect x="25" y="15" rx="5" ry="5" width="220" height="0" />
          <rect x="0" y="0" rx="15" ry="15" width="252" height="252" />
        </ContentLoader>
        </div>
      ) : (
        <>
          <div className="col">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <div className="col__price">
              <div>
                <p>Цена:</p>
                <h5>{price} руб.</h5>
              </div>
              <div className="buttons">
                <button
                  className={`favourite-button ${
                    favourite ? "buttonFavouriteAdded" : ""
                  }`}
                  onClick={onClickFavourite}
                ></button>
                <button
                  className={`addCart ${checked ? "buttonCartAdded" : ""}`}
                  onClick={onClickCart}
                ></button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MainCol;
