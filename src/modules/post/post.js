import React from 'react';
import Header from '../../components/header';
import PostComponent from '../../components/post.component';
import CommentList from '../../components/comment-list';
import '../../styles/header.css';

class Post extends React.Component {

  comments = ['comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5'];
  likes = 122;

  render() {
    return (
      <div>
        <Header title={'The Bomb'} />
        <div className="header-offset">
          <PostComponent
            title="Title test"
            text="blablabla asasdasdsa dasd asd asd awd asd asd sad"
            author="Darwin, Author"
            fires={this.likes}
            comments={this.comments.length}
            createdAt="12/12/2012" />
          <CommentList comments={this.comments} />
        </div>
      </div>
    );
  }
}

export default Post;
