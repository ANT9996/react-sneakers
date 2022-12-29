import React from "react";
import MainCol from "./MainCol";
import { Link } from "react-router-dom";
import AppContext from '../context';

function MyFavourites(props) {
  const { favouriteItems } = React.useContext(AppContext)
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <Link to={"/"} className={'gerge'}>
          <button></button>
        </Link>
        <h1>Мои избранные</h1>
      </div>
      <div className="row">
        {favouriteItems.map((item) => (
          <MainCol
            key={item.id}
            {...item}
            onAddToCart={(obj) => props.addToCart(obj)}
            onAddToFavourite={(obj) => props.onAddToFavourite(obj)}
            onRemFromFavourite={(id) => props.onRemFromFavourite(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyFavourites;
