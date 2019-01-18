import React from 'react';
import CommentSection from '../CommentSection/CommentContainer'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import Styled from 'styled-components'

const Div = Styled.div`
    margin: 10px 20px;
    border: 1px solid lightgrey;
`

const Post = (props) => {
    return (
        <Div className='singlepost'>
            <PostHeader username={props.post.username} userimage={props.post.thumbnailUrl} />
            <PostBody postMainImage={props.post.imageUrl} />
            <CommentSection comments={props.post.comments} />
        </Div>
    )
}

export default Post