import React from "react";
import axios from 'axios';

function MainCol({id, name, price, img, onAddToCart, onAddToFavourite, onRemFromFavourite, onRemoveItem, isFavourite=false, isCarted=false,}) {
  const [checked, setChecked] = React.useState(isCarted);
  const [favourite, setFavourite] = React.useState(isFavourite);
  const onClickCart = () => {
    if (checked === false) {
      onAddToCart({id, name, price, img})
    } else {
      onRemoveItem(id, name)
    }
    setChecked(!checked)
  }

  const onClickFavourite = () => {
    if (favourite === false) {
      onAddToFavourite({id, name, price, img})
    } else {
      onRemFromFavourite(id)
    }
    setFavourite(!favourite)
  }

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
          className={`favourite-button ${favourite ? "buttonFavouriteAdded" : ""}`}
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
