import React from "react";

function MainCol({id, name, price, img, onAddToCart}) {
  const [checked, setChecked] = React.useState(false);
  const [favourite, setFavourite] = React.useState(false);
  const onClickCart = () => {
    if (checked === false) {
      onAddToCart({id, name, price, img})
    }
    setChecked(!checked)
  }

  const onClickFavourite = () => {
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
