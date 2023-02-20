import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Youtube_Api_Link } from "../../public/config";
import Shimmer from "./Shimmer";
import VideoDetails from "./VideoDetails";
const Videoconatiner = () => {
  const [videocart, setVideoCart] = useState([]);
  useEffect(() => {
    myfun();
  }, []);
  async function myfun() {
    const data = await fetch(Youtube_Api_Link);
    const json = await data.json();

    setVideoCart(json.items);
  }
  console.log(videocart);
  return videocart.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap ml-24 overflow-clip ">
      {videocart.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoDetails info={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videoconatiner;
