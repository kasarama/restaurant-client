import React from "react";
import ChatRoom from "./components/ChatRoom";
import OrderViewer from "./components/OrderViewer";

const App = () => {
  return (
    <>
      <div>
        <ChatRoom />
      </div>{" "}
      <OrderViewer />
    </>
  );
};

export default App;
