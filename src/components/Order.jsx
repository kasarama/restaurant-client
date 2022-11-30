import React from "react";

export default function Order({ order }) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.status}</td>
      <td>{order.withDelivery ? "Delivery" : "Selv pickup"}</td>
      <td>{order.totalPrice}</td>
      <td>
        {order.items.map((i) => {
          return <p> {i.quantity + " X " + i.menuItemId} </p>;
        })}
      </td>
      <td>{order.createdAt}</td>
    </tr>
  );
}
