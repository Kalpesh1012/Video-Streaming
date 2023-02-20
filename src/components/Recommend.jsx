import React from "react";

const Recommend = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className=" h-32 w-[450px]  ml-9 mt-2 flex">
      <div className="h-28 w-44 mt-2">
        <img className="rounded-lg h-28 w-40 " src={thumbnails.medium.url} />
      </div>
      <div className=" h-32 w-80 ml-2 ">
        <ul>
          <li className="h-[50px] w-72  font-semibold whitespace-pre-wrap overflow-hidden overflow-ellipsis ">
            {title}
          </li>
          <li className="">{channelTitle}</li>
          <li>{(statistics.viewCount / 1000000).toFixed(2)}M views</li>
        </ul>
      </div>
    </div>
  );
};

export default Recommend;
