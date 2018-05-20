import React from 'react';
import Header from '../../components/header';
import PostFormComponent from '../../components/post-form.component';
import '../../styles/header.css';

class PostForm extends React.Component {

  render() {
    return (
      <div>
        <Header title={'Plant the Bomb'} />
        <div className="header-offset">
          <PostFormComponent />
        </div>
      </div>
    );
  }
}

export default PostForm;
