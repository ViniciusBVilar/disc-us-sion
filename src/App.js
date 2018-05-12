import React, { Component } from 'react';
import Home from './modules/home/home';
import PostForm from './modules/post-form/post-form';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home />
        )} />
        <Route exact path="/postForm" render={() => (
          <PostForm />
        )} />
      </div>
    );
  }
}

export default App;
