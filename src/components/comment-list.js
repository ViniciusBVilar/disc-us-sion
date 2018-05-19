import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {

  render() {
    return (
      <div>
        {this.props.comments &&
          this.props.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
      </div>
    );
  }

}

export default CommentList;
