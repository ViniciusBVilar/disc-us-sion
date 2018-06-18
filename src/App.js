import React, { Component } from 'react';
import HomePage from './modules/home/home.page';
import CategoryPage from './modules/category/category.page';
import { Route } from 'react-router-dom';
import PostFormPage from './modules/post-form/post-form.page';
import CategoryPostsPage from './modules/post/category-posts.page';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage />
        )} />
        <Route exact path="/createForm/:category" render={(params) => (
          <PostFormPage params={params}/>
        )} />
        <Route exact path="/editForm/:category/:id" render={(params) => (
          <PostFormPage params={params}/>
        )} />
        <Route exact path="/:category/:id" render={(params) => (
          <CategoryPostsPage params={params}/>
        )} />
        <Route exact path="/:category" render={(category) => (
          <CategoryPage category={category}/>
        )} />
      </div>
    );
  }
}

export default App;
