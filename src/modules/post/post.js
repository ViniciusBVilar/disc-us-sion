import React from 'react';
import Header from '../../components/header';
import PostComponent from '../../components/post.component';

class Post extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PostComponent 
          title="Title test"
          text="blablabla asasdasdsa dasd asd asd awd asd asd sad"
          author="Darwin, Author"
          createdAt="12/12/2012" />
      </div>
    );
  }
}

export default Post;
