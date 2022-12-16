import React from 'react';

function Header() {
    return (
        <header>
        <div className="headerLeft">
          <img
            height={40}
            width={40}
            src="./img/logo.png"
            className="logo"
            alt="logo"
          />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img height="18" width="18" src="./img/cart.svg" alt='cart'/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img height="18" width="18" src="./img/favourites.svg" alt='favourites'/>
          </li>
          <li>
            <img height="18" width="18" src="./img/profile.svg"  alt='profile'/>
          </li>
        </ul>
      </header>
    );
}

export default Header;