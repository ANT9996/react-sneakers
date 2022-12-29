import React from "react";
import AppContext from "./../context";

function MainCol({
  id,
  parentId,
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
  const { cartItems, favouriteItems } = React.useContext(AppContext);
  const obj = { id, parentId: id, name, price, img }
  const onClickCart = () => {
    if (checked === false) {
      onAddToCart(obj);
    } else {
      onRemoveItem(id);
    }
    setChecked(!checked);
  };

  const onClickFavourite = () => {
    if (favourite === false) {
      onAddToFavourite(obj);
    } else {
      onRemFromFavourite(id);
    }
    setFavourite(!favourite);
  };

  React.useEffect(() => {
    setChecked(cartItems.some((item) => item.parentId === id));
  }, [cartItems]);

  React.useEffect(() => {
    setFavourite(favouriteItems.some((item) => item.parentId === id));
  }, [favouriteItems]);


  return (
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
  );
}

export default MainCol;
