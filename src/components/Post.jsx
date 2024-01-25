import React from 'react';

function Post({ username, content, date }) {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-user">{username}</div>
                <div className="post-date">{date}</div>
            </div>
            <div className="post-content">{content}</div>
        </div>
    )
}

export default Post;