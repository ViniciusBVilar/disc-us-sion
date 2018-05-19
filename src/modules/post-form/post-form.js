import React from 'react';
import Header from '../../components/header';
import PostFormComponent from '../../components/post-form.component';

class PostForm extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PostFormComponent />
      </div>
    );
  }
}

export default PostForm;
