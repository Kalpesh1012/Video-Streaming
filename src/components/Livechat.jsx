import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/ChatSlice";
import Chat from "./Chat";
import { GenerateRandomName } from "../../public/helper";
import { Makeid } from "../../public/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const messagechat = useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addmessage({
          name: GenerateRandomName(),
          message: Makeid(20) + "😆",
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="h-[400px] w-full  overflow-y-scroll flex flex-col-reverse">
      {messagechat.map((c) => {
        return <Chat name={c.name} message={c.message} />;
      })}
    </div>
  );
};

export default Livechat;
