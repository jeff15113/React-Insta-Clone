import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        }
    }
    componentDidMount() {
        this.setState({
            posts: dummyData,
            filteredPosts: dummyData
        })
    }
    searchPostsHandler = e => {
        const posts = this.state.posts.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post;
            }
        });
        this.setState({ filteredPosts: posts });
    };
    render() {
        return (
            <div>
                < SearchBar search={this.searchPostsHandler} />
                <PostContainer posts={this.state.filteredPosts} />
            </div>
        )
    }
}
export default PostsPage
