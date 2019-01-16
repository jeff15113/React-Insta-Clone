import React from 'react';
import Post from './Post'

import './PostContainer.css'
const PostContainer = (props) => {
    return (
        <div className='postContainer'>
            {props.posts.map(post =>
                <Post post={post} key={post.timestamp} />
            )}
        </div>
    )
}

export default PostContainer