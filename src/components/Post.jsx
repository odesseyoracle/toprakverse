import React from 'react';

function Post({ username, content, date, picture }) {
    return (
        <div className="post border-solid border-2 border-black m-3 p-3 w-full h-auto flex flex-col items-center">
            <div className="post-header">
                <div className="post-user">{username}</div>
                <div className="post-date">{date}</div>
            </div>
            <div>
                <img src={picture} alt="" className="w-96" />
            <div className="post-content">{content}</div>
            </div>
            
        </div>
    )
}

export default Post;