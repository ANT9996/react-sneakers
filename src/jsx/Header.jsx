import React from "react";
import { Link } from "react-router-dom";
import AppContext from '../context';
import logoIcon from '../assets/img/logo.png'
import cartIcon from '../assets/img/cart.svg'
import favouriteIcon from '../assets/img/favourites.svg'
import profileIcon from '../assets/img/profile.svg'

function Header(props) {
  const { cartItems } = React.useContext(AppContext)
  const costVal = cartItems.reduce( (sum, obj) => Number(obj.price) + Number(sum), 0);
  return (
    <header>
      <div className="headerLeft">
        <Link to={"/react-sneakers"}>
          <img
            height={40}
            width={40}
            src={logoIcon}
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
          <img height="18" width="18" src={cartIcon} alt="cart" />
          <span>{costVal} руб.</span>
        </li>
        <li>
          <Link to={"/react-sneakers/favourites"}>
            <img
              height="18"
              width="18"
              src={favouriteIcon}
              alt="favourites"
            />
          </Link>
        </li>
        <li>
          <Link to={"/react-sneakers/orders"}>
            <img height="18" width="18" src={profileIcon} alt="profile" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
