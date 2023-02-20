import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closetoggle } from "../utils/SideBarSlice";
import { Youtube_Api_Link } from "../../public/config";
import Recommend from "./Recommend";
import { Link } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Livechat from "./Livechat";
import { addmessage } from "../utils/ChatSlice";

const WatchVideo = () => {
  const disptch = useDispatch();
  useEffect(() => {
    disptch(closetoggle());
  }, []);

  const [videoid] = useSearchParams();
  const [videoapi, setVideoApi] = useState([]);
  const [istoggle, setIsToggle] = useState(true);
  const [yourmessage, SetYourMessage] = useState("");

  useEffect(() => {
    myfun();
  }, []);
  async function myfun() {
    const data = await fetch(Youtube_Api_Link);
    const json = await data.json();

    setVideoApi(json.items);
  }

  return (
    <div className="ml-6 mt-6 flex">
      <div>
        <iframe
          width="950"
          height="550"
          src={"https://www.youtube.com/embed/" + videoid.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="mt-6 ml-2 flex">
          <img
            className="h-11 w-11"
            src="https://api.logo.com/api/v2/images?logo=logo_83837bba-d916-43a3-801c-8a83504e412d&format=webp&margins=0&quality=60&width=500&background=transparent&u=1676622590"
          />
          <button className="ml-20 h-10 w-28 border-2 rounded-3xl bg-black text-white hover:bg-slate-900">
            Subscribe
          </button>
          <div className="ml-64 h-10 w-36 border rounded-3xl bg-slate-100 ">
            <button className=" pt-2 h-full w-14 hover:rounded-l-3xl  hover:bg-slate-300">
              Like
            </button>
            <button className=" pt-2 h-full w-[84px] hover:rounded-r-3xl hover:bg-slate-300">
              Dislike
            </button>
          </div>
          <button className="ml-2 h-10 w-28 border-2 rounded-3xl bg-slate-100  hover:bg-slate-300">
            Share
          </button>
          <button className="ml-2 h-10 w-28 border-2 rounded-3xl bg-slate-100  hover:bg-slate-300">
            Download
          </button>
        </div>
        <div className="mt-2">
          <CommentContainer />
        </div>
      </div>
      <div>
        <div>
          {istoggle ? (
            <div>
              <button
                className="ml-10 h-8 w-[430px] border-2 rounded-3xl hover:bg-slate-200"
                onClick={() => {
                  setIsToggle(false);
                }}
              >
                Show chat
              </button>
            </div>
          ) : (
            <div className="ml-10 h-[465px] w-[430px] border-2 bg-slate-50">
              <div className="">
                <Livechat />
              </div>
              <div className="flex">
                <form
                  className="flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                    disptch(
                      addmessage({
                        name: "Kalpesh Mahale",
                        message: yourmessage,
                      })
                    );
                    SetYourMessage("");
                  }}
                >
                  <input
                    className="mt-1 h-5 w-[300px] ml-6 border-b-2 pl-2"
                    placeholder="say something......"
                    value={yourmessage}
                    onChange={(e) => {
                      SetYourMessage(e.target.value);
                    }}
                  ></input>
                  <button className="ml-2 h-7 w-14 border-2 hover:bg-slate-200">
                    Send
                  </button>
                </form>
              </div>
              <button
                onClick={() => {
                  setIsToggle(true);
                }}
                className=" h-8 w-[428px] border-t-2 hover:rounded-2xl hover:bg-slate-200 mt-1 "
              >
                Hide Chat
              </button>
            </div>
          )}
        </div>
        <div>
          {videoapi.map((items, index) => {
            return (
              <Link to={"/watch?v=" + items.id} key={index}>
                <Recommend info={items} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
