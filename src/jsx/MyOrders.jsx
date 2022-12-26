import React from "react";
import { Link } from "react-router-dom";
function MyOrders() {
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <Link to={"/"} className={'gerge'}>
          <button></button>
        </Link>
        <h1>Мои избранные</h1>
      </div>
      <div className="row">
        
      </div>
    </div>
  );
}

export default MyOrders;
