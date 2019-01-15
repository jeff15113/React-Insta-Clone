import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

import dummyData from './dummy-data';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer posts={this.state.posts} />

      </div>
    );
  }
}

export default App;
