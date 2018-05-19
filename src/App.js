import React, { Component } from 'react';
import Home from './modules/home/home';
import { Route } from 'react-router-dom';
import PostForm from './modules/post-new-edit/post-new-edit';
import Post from './modules/post/post';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home />
        )} />
        <Route exact path="/postForm" render={() => (
          <PostForm/>
        )} />
        <Route exact path="/post" render={() => (
          <Post/>
        )} />
      </div>
    );
  }
}

export default App;
