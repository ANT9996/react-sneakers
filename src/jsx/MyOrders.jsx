import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function MyOrders() {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://63959cf790ac47c6806f0140.mockapi.io/orders"
      );
      setOrders(data);
    })();
  }, []);
  return (
    <div className="my-purchases">
      <div className="back-h1">
        <Link to={"/"} className={"gerge"}>
          <button></button>
        </Link>
        <h1>Мои покупки</h1>
      </div>
      {orders.map((element) => (
        <>
          <br></br>
          <h1>#{element.id}</h1>
          <div className="row">
            {element.items.map((item, i) => (
              <div className="col">
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <div className="col__price">
                  <div>
                    <p>Цена:</p>
                    <h5>{item.price} руб.</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default MyOrders;
