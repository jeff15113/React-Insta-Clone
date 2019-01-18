import React from 'react';
import Styled from 'styled-components'

const PostHeaderDiv = Styled.div`
    display: flex;
    height: 50px;
    padding: 15px;
    align-items: center; 
`
const Img = Styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px
`
const H4 = Styled.h4`
    padding-left: 10px;
`

const PostHeader = (props) => {
    return (
        <PostHeaderDiv>
            <Img src={props.userimage} alt="userimage" />
            <H4>{props.username}</H4>
        </PostHeaderDiv>
    )
}

export default PostHeader