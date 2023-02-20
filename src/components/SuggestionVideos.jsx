import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

const SuggestionVideos = () => {
  const [suggest, SetSuggest] = useState([]);
  const getdata = useSelector((store) => store.pass);
  useEffect(() => {
    suggestion();
  }, []);
  const query = getdata.addmenu.slice(-1);
  const suggestion = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        query +
        "&key=AIzaSyCLtfb256_ZVn9S0ba9af1iob3xptnYEjM"
    );
    const json = await data.json();

    SetSuggest(json.items);
  };
  console.log(suggest);
  return (
    <div>
      {suggest.map((item) => {
        return (
          <>
            <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
              <div className="ml-64 mt-4 flex h-48 w-full">
                <div className="">
                  <img src={item.snippet.thumbnails.medium.url}></img>
                </div>
                <div className="ml-3 mt-2 text-lg font-semibold  w-[600px]">
                  <h1>{item.snippet.title}</h1>
                  <div className="flex mt-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      className="w-8 h-8 "
                    />
                    <h1 className="ml-2 pt-1 text-sm">
                      {item.snippet.channelTitle}
                    </h1>
                  </div>
                  <h1 className="mt-2 text-xs">{item.snippet.description}</h1>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default SuggestionVideos;
