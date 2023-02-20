import React from "react";

const BodyButtons = () => {
  const list = [
    "All",
    "ReactRouter",
    "C++",
    "NamasteJS",
    "AkshaySaini",
    "NamasteReact",
    "KapilSharmaShow",
    "IndvsAus",
    "Music",
    "BollywoodMusic",
  ];
  return (
    <div className="flex mt-2 ml-24">
      {list.map((item, index) => (
        <button
          key={index}
          className="h-7 w-full border-2 rounded-lg bg-slate-200 hover:bg-slate-400 ml-8 pl-2 pr-2"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default BodyButtons;
