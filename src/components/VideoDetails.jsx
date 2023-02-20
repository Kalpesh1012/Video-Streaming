import React from "react";

const VideoDetails = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="h-64 w-[280px]  ml-3 mt-8">
      <div>
        <img className="rounded-lg" src={thumbnails.medium.url} />
      </div>
      <div>
        <ul>
          <li className=" h-[50px] w-72  font-semibold whitespace-pre-wrap overflow-hidden overflow-ellipsis">
            {title}
          </li>
          <li className="font-extralight">{channelTitle}</li>
          <li className="font-extralight text-sm">
            {(statistics.viewCount / 1000000).toFixed(2)}M Views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoDetails;
