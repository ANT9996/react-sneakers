import React from "react";
import AppContext from "./../context";

function MainCol({
  id,
  // parentId,
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
  const [favDis, setFavDis] = React.useState(false)
  const [cartDis, setCartDis] = React.useState(false)
  const [checked, setChecked] = React.useState(isCarted);
  const [favourite, setFavourite] = React.useState(isFavourite);
  const { cartItems, favouriteItems } = React.useContext(AppContext);
  const obj = { id, parentId: id, name, price, img }
  const onClickCart = async () => {
    setCartDis(true)
    if (checked === false) {
      await onAddToCart(obj);
    } else {
      await onRemoveItem(id);
    }
    setChecked(!checked);
    setTimeout(() => {
      setCartDis(false)
    }, 1000);
  };

  const onClickFavourite = async () => {
    setFavDis(true)
    if (favourite === false) {
      await onAddToFavourite(obj);
    } else {
      await onRemFromFavourite(id);
    }
    setFavourite(!favourite);
    setTimeout(() => {
      setFavDis(false)
    }, 1000);
  };

  React.useEffect(() => {
    setChecked(cartItems.some((item) => item.parentId === id));
    // eslint-disable-next-line
  }, [cartItems]);

  React.useEffect(() => {
    setFavourite(favouriteItems.some((item) => item.parentId === id));
    // eslint-disable-next-line
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
            disabled={favDis}
            className={`favourite-button ${
              favourite ? "buttonFavouriteAdded" : ""
            }`}
            onClick={onClickFavourite}
          ></button>
          <button
            disabled={cartDis}
            className={`addCart ${checked ? "buttonCartAdded" : ""}`}
            onClick={onClickCart}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default MainCol;
