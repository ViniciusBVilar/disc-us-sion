import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props.comments;
    return (
      <div>
        {comments &&
          comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  }
}

export default CommentList;
