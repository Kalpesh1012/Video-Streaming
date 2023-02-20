import React, { useState } from "react";
import { Dummy_Comment_Data } from "../../public/config";

const Comment = ({ info }) => {
  const { name, text, replies } = info;

  return (
    <div className="flex h-full w-full border-b-2   ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        className="w-6 h-6 mt-2"
      />

      <div className="ml-6 mt-1">
        <h1 className="font-semibold text-sm">{name}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

const Comments = ({ singlecomment }) => {
  return (
    <div className="mt-4">
      {singlecomment.map((item, index) => {
        return (
          <div className="">
            <Comment key={index} info={item} />
            <div className="ml-8">
              <Comments singlecomment={item.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  const [comments, SetComments] = useState("");
  return (
    <>
      <div className="text-2xl font-semibold">
        {Object.keys(Dummy_Comment_Data).length} Comments
      </div>
      <form
        className="flex mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          Dummy_Comment_Data.unshift({
            name: "Kalpesh Mahale",
            text: comments,
            replies: [],
          });
          SetComments("");
        }}
      >
        <input
          className="w-full pl-6"
          placeholder="Add a comment"
          value={comments}
          onChange={(e) => {
            SetComments(e.target.value);
          }}
        ></input>
        <button className="ml-2">Send</button>
      </form>
      <div className="mt-4">
        <Comments singlecomment={Dummy_Comment_Data} />
      </div>
    </>
  );
};

export default CommentContainer;
