import React from 'react';
import CommentSection from '../CommentSection/CommentContainer'
import PostHeader from './PostHeader'
import PostBody from './PostBody'

const Post = (props) => {
    return (
        <div>
            <PostHeader username={props.post.username} userimage={props.post.thumbnailUrl} />
            <PostBody postMainImage={props.post.imageUrl} />
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default Post