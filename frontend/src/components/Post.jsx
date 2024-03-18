import React from "react";

function Post({ username, content, date, picture, profilePicture }) {
  return (
    <div className="post m-3 p-3 w-auto h-auto flex flex-col items-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div className="post-header flex flex-row w-full items-center justify-between">
        <div className="flex items-center ">
          <img
            className="rounded-full h-12 w-12 my-2"
            src={profilePicture}
            alt=""
          />
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
