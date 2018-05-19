import React from 'react';
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
          <h1>{title}</h1>
          <h4>{text}</h4>
          <caption>{author}</caption>
          {/* TODO: PASS THIS COMPONENT TO A GRID IN FORM TOP */}
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
