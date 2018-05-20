import React from 'react';
import '../styles/comment.css';
import CommentSeparator from '../components/comment-separator';

class Comment extends React.Component {

  render() {
    return (
      <div>
        <div className="comment">
          <p>{this.props.comment}</p>
        </div>
        <CommentSeparator />
      </div>
    );
  }

}

export default Comment;
