import React from "react";
import MainCol from "./MainCol";
import { Link } from "react-router-dom";
import AppContext from "../context";
import DataEmpty from "./DataEmpty";

function MyFavourites(props) {
  const { items, favouriteItems } = React.useContext(AppContext);
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <Link to={""} className={"gerge"}>
          <button></button>
        </Link>
        <h1>Мои избранные</h1>
      </div>
      <div className="row">
        {
          favouriteItems.length > 0 ? (

            items.map((item) => (
              favouriteItems.some((obj) => item.id === obj.parentId)) &&(

                <MainCol
                  key={item.id}
                  {...item}
                  onAddToCart={(obj) => props.addToCart(obj)}
                  onAddToFavourite={(obj) => props.onAddToFavourite(obj)}
                  onRemFromFavourite={(id) => props.onRemFromFavourite(id)}
                  onRemoveItem={(id) => props.onRemoveItem(id)}
                />
              )
          )
          ) : (
            <DataEmpty name={'Закладок нет :('} desc={'Вы ничего не добавляли в закладки'}/>
          )
        }
      </div>
    </div>
  );
}

export default MyFavourites;
