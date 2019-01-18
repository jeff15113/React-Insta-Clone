import React from 'react'
import Post from './Post'
import Styled from 'styled-components'

const PostContainerDiv = Styled.div`
    width: 681px;
`
//import './PostContainer.css'
const PostContainer = (props) => {
    return (
        <PostContainerDiv>
            {props.posts.map(post =>
                <Post post={post} key={post.timestamp} />
            )}
        </PostContainerDiv>
    )
}

export default PostContainer