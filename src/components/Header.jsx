import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search_API_Link } from "../../public/config";
import { addresult } from "../utils/PassSlice";
import { showresult } from "../utils/SearchSlice";
import { showtoggle } from "../utils/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handletoggle = () => {
    dispatch(showtoggle());
  };

  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [showsuggestion, setShowSuggestion] = useState(false);

  const show = useSelector((store) => store.search);

  useEffect(() => {
    const timer = dispatch(addresult(search));
    setTimeout(() => {
      if (show[search]) {
        setList(show[search]);
      } else {
        suggestion();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  const suggestion = async () => {
    const data = await fetch(Search_API_Link + search);
    const json = await data.json();

    setList(json[1]);
    dispatch(
      showresult({
        [search]: json[1],
      })
    );
  };

  return (
    <div className="flex justify-between ">
      <div className="flex ml-3  ">
        <img
          alt="Hamburger-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/345px-Hamburger_icon.svg.png"
          className="w-8 h-6 mt-4 cursor-pointer"
          onClick={() => {
            handletoggle();
          }}
        />
        <Link to="/">
          <img
            alt="Logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            className="w-[100px] h-14 ml-6 "
          />
        </Link>
      </div>
      <div>
        <div className="flex mt-2">
          <input
            placeholder="    Search"
            className="w-[550px] h-9 mt-2 rounded-l-full border-2 hover:border-blue-300 pl-3"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          ></input>
          <Link to="/result">
            <button className=" w-14 h-9 border-2 mt-2 rounded-r-full bg-slate-100 hover:bg-slate-300">
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                className="w-6 h-5 ml-2"
              />
            </button>
          </Link>
        </div>
        {showsuggestion && (
          <div className=" fixed h-[339px] w-[550px] border-2 bg-white rounded-xl mt-1 ">
            <ul>
              {list.map((item, index) => {
                return (
                  <div className="flex " key={index}>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                      className="w-4 h-4 mt-[14px] ml-2 "
                    />
                    <button
                      onClick={(e) => {
                        setSearch(e.target.item);
                      }}
                    >
                      <li className="mt-2 ml-4 font-semibold">{item}</li>
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        className="w-10 h-9 mt-2"
      />
    </div>
  );
};

export default Header;
