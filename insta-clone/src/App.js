import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import LoginPage from './components/Login/Login'
import authenticate from './components/authentication/authenticate'
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default authenticate(App)(LoginPage);
