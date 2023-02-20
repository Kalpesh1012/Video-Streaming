import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenupen = useSelector((store) => store);

  return !isMenupen.sideSlice.isMenuOpen ? null : (
    <div className="h-[900px] w-40 ml-2  mt-2  bg-white ">
      <ul>
        <div className="flex ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg"
            className="ml-2 h-6 w-6 "
          />
          <Link to="/">
            <li className="pl-4"> Home</li>
          </Link>
        </div>
        <div className="flex mt-3">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-shorts-icon-png.png"
            className="h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Shorts</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/subscriptions-1781681-1518361.png"
            className="h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Subscription</li>
        </div>
      </ul>
      <ul className=" border-t-2">
        <div className="flex  mt-3 mb-3">
          <img
            src="https://static.thenounproject.com/png/2481186-200.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Library</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://thumbs.dreamstime.com/b/history-gray-170719354.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">History</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://www.seekpng.com/png/detail/956-9563901_home-youtube-youtube-video-dislikes-youtube-10-000.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">YourVideos</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/watch-later-1781603-1513853.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">WatchLater</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpdXUhQgCGal1L3VcnHcDYFLVdBHpIDbV-e0U5eDkiGqF6sKGlReD_5u2cwFh5vtS2zE&usqp=CAU"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">LikedVideos</li>
        </div>
      </ul>
      <h1 className="ml-3 mt-2 font-bold border-t-2">Explore</h1>
      <ul>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://icon-library.com/images/trending-icon/trending-icon-16.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Trending</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://w7.pngwing.com/pngs/623/558/png-transparent-youtube-music-song-youtube-blue-text-logo.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Music</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/919/290/small/video-play-film-player-movie-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Movie</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_3ccb825e532e7c58569e071ba0b2673d/youtube-live.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Live</li>
        </div>
        <div className="flex mt-3 mb-3">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/watch-later-1781603-1513853.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Gaming</li>
        </div>
        <div className="flex mt-3 mb-3">
          <img
            src="https://t4.ftcdn.net/jpg/02/58/29/09/360_F_258290955_48MCm6IcnSN3sodcIoOMXnucbTpsFiI9.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">News</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://w7.pngwing.com/pngs/880/341/png-transparent-business-award-youtube-art-competition-scoring-rating-sport-logo-business.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Sports</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://images-platform.99static.com//FoxEzT-7nLqKcAPUSlBBqEyNTWw=/661x2809:1317x3465/fit-in/500x500/99designs-contests-attachments/113/113858/attachment_113858901"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Learning</li>
        </div>
      </ul>
      <ul className=" border-t-2">
        <div className="flex  mt-3 mb-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/542/150/small/setting-icon-design-tools-cog-gear-line-style-for-graphic-design-logos-web-sites-social-media-ui-mobile-app-free-vector.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Settings</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://thumbs.dreamstime.com/b/finish-flag-icon-simple-illustration-129166879.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">ReportHistory</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://t3.ftcdn.net/jpg/05/10/88/82/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">Help</li>
        </div>
        <div className="flex  mt-3 mb-3">
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/feedback-8.png"
            className="flex h-6 w-6 mt-1 ml-2"
          />
          <li className="mt-1 pl-4">SendFeedback</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
