import React, { Component } from 'react';
import Home from './modules/home/home';
import Category from './modules/category/category';
import { Route } from 'react-router-dom';
import PostForm from './modules/post-form/post-form';
import Post from './modules/post/post';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home />
        )} />
        <Route exact path="/postForm/:category" render={(params) => (
          <PostForm params={params}/>
        )} />
        <Route exact path="/postForm/:category/:id" render={(params) => (
          <PostForm params={params}/>
        )} />
        <Route exact path="/post/:category/:id" render={(params) => (
          <Post params={params}/>
        )} />
        <Route exact path="/category/:category" render={(category) => (
          <Category category={category}/>
        )} />
      </div>
    );
  }
}

export default App;
