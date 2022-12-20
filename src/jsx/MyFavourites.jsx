import React from "react";
import MainCol from "./MainCol";

function MyFavourites(props) {
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <button></button>
        <h1>Мои избранные</h1>
      </div>
      <div className="row">
      {props.items.map((item) => (
          <MainCol
            price={item.price}
            name={item.name}
            onClick={() => console.log(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyFavourites;
