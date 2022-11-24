import React, { useEffect, useState } from "react";

export default function Login({ registerRestaurant }) {
  const [loginCredentials, setLoginCredentials] = useState({});

  const performLogin = (evt) => {
    console.log(evt);
    evt.preventDefault();
    if (!loginCredentials.restaurantId) {
      console.log("NO VALUE");
    } else {
      console.log(" value", loginCredentials.restaurantId);

      localStorage.setItem("restaurantId", loginCredentials.username);
      registerRestaurant(loginCredentials.restaurantId);
    }
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input
          placeholder="Restaurant Email"
          required={true}
          type="number"
          id="restaurantId"
        />
        <button onClick={performLogin}>Connect</button>
      </form>
    </div>
  );
}
