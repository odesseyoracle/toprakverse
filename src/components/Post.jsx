import React from "react";

function Post({ username, content, date, picture, profilePicture }) {
  return (
    <div className="post border-solid border-2 border-black m-3 p-3 w-full h-auto flex flex-col items-center">
      <div className="post-header flex flex-row w-full items-center justify-between">
        <div className="flex items-center ">
        <img className="rounded-full h-12 w-12" src={profilePicture} alt="" />
        <div className="post-user font-bold m-1">{username}</div>
        </div>
        <div className="post-date">{date}</div>
      </div>
      <div>
        <img src={picture} alt="" className="w-96" />
        <div className="post-content">{content}</div>
      </div>
    </div>
  );
}

export default Post;
