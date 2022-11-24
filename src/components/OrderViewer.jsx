import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import Login from "./Login";
import Order from "./Order";

export default function OrderViewer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [restaurantId, setRestaurantId] = useState(null);
  const [newOrders, setNewOrders] = useState([]);
  const [a, setA] = useState(0);
  let stompClient;

  const connect = () => {
    console.log(restaurantId);

    let Sock = new SockJS("http://localhost:7070/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  const registerRestaurant = (id) => {
    console.log(id);
    setRestaurantId(id);
    setIsLoggedIn(true);
    //  connect();
  };
  useEffect(() => {
    if (isLoggedIn) {
      connect();
    }
  }, [isLoggedIn]);

  const onConnected = () => {
    stompClient.subscribe(`/user/${restaurantId}/orders`, onNewOrder);
  };

  const onError = (err) => {
    console.log(err);
  };

  const onNewOrder = (payload) => {
    var order = JSON.parse(payload.body);
    console.log(order);
    newOrders.push(order);
    setNewOrders(newOrders);
    setA(order.id);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="chat-content">
          <h1>{a}</h1>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>With delivery</th>
                <th>Total Price</th>
                <th>Items:</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {newOrders.map((o) => {
                return <Order id={o.id} order={o} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Login registerRestaurant={registerRestaurant} />
      )}
    </div>
  );
}
