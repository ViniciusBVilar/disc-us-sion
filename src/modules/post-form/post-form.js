import React from 'react';
import Header from '../../components/header';
import PostFormComponent from '../../components/post-form.component';

class PostForm extends React.Component {

  render() {
    return (
      <div>
        <Header title={'Plant the Bomb'}/>
        <PostFormComponent />
      </div>
    );
  }
}

export default PostForm;
