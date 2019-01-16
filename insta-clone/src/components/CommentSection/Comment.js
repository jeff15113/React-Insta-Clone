import React from 'react';

const Comment = (props) => {
    return (
        <div className='comments'>

            <span style={{ fontWeight: 600 }}>{props.comment.username} </span>
            <span>{props.comment.text}</span>
        </div>
    )
}

export default Comment