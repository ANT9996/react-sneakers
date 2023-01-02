import React from "react";
import { Link } from "react-router-dom";
import AppContext from '../context';

function Header(props) {
  const { cartItems } = React.useContext(AppContext)
  const costVal = cartItems.reduce( (sum, obj) => Number(obj.price) + Number(sum), 0);
  return (
    <header>
      <div className="headerLeft">
        <Link to={""}>
          <img
            height={40}
            width={40}
            src="img/logo.png"
            className="logo"
            alt="logo"
          />
        </Link>

        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img height="18" width="18" src="img/cart.svg" alt="cart" />
          <span>{costVal} руб.</span>
        </li>
        <li>
          <Link to={"favourites"}>
            <img
              height="18"
              width="18"
              src="img/favourites.svg"
              alt="favourites"
            />
          </Link>
        </li>
        <li>
          <Link to={"orders"}>
            <img height="18" width="18" src="img/profile.svg" alt="profile" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
