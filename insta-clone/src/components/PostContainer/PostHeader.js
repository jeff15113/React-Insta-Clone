import React from 'react';

const PostHeader = (props) => {
    return (
        <div className="postHeader">
            <img src={props.userimage} alt="userimage" />
            <h4>{props.username}</h4>
        </div>
    )
}

export default PostHeader