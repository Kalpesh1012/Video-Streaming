import React from "react";

const Chat = ({ name, message }) => {
  return (
    <div className="flex h-10 w-full shadow-sm">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        className="w-8 h-8 mt-1"
      />
      <h1 className="mt-2 ml-2 font-semibold">{name}</h1>
      <h1 className="mt-2 ml-2 ">{message}</h1>
    </div>
  );
};

export default Chat;
