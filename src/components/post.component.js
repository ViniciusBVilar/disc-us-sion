import React from 'react';
import { Box, Flex } from 'reflexbox';
import '../styles/post.css';
import CommentList from './comment-list';
import Statusbar from './status-bar';
import Toolbar from './tool-bar';

class PostComponent extends React.Component {

  comments = ['comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5', 'comment comment comment comment comment comment 1', 'comment comment comment comment comment comment 2 comment comment comment 2 comment comment comment 2 ', 'comment comment comment comment comment comment 3', 'comment comment comment comment comment comment 4', 'comment comment comment comment comment comment 5'];
  likes = 122;

  render() {
    const { title, text, author, createdAt } = this.props;

    const likes = this.likes;
    const comments = this.comments;

    return (
      <div >
        <div className="post">
          <h3 htmlFor="title">Title</h3>
          <p>{title}</p>
          <h3 htmlFor="text">Text</h3>
          <p>{text}</p>
          <h3 htmlFor="author">Author</h3>
          <p>{author}</p>
          <div className="tool-bar">
            <Toolbar createdAt={createdAt} />
          </div>
        </div>
        <div className="status-bar">
          <Statusbar likes={likes} comments={comments.length} />
        </div>
        <div className="comment-list">
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }

}

export default PostComponent;
