import React from 'react';
import { deleteComment } from '../../data/comments.data-source';
import {
  createComment,
  deleteCommentParent,
  downVoteComment,
  upVoteComment } from '../../redux/actions/comments.actions';
import CommentComponent from './comment.component';
import { connect } from 'react-redux';

class CommentList extends React.Component {

    
  handleDeleteCommentClick = id => {
    this.props.deleteCommentDispatch(id);
    this.props.deleteCommentParentDispatch(id);
  };

  handleVoteCommentClick = (upVote, id) => {
    upVote ? this.props.upVoteDispatch(id) : this.props.downVoteDispatch(id);
  }

  handleSubmitCommentClick = comment => {
    this.props.createCommentDispatch(comment);
  }

  render() {
    const comments = this.props.comments;
    debugger
    return (
      <div>
        {comments &&
          Object.keys(comments).map(commentId => (
            <CommentComponent
              key={comments[commentId].id}
              comment={comments[commentId]} 
              onDeleteCommentClick={this.handleDeleteCommentClick}
              onVoteCommentClick={this.handleVoteCommentClick}
              onSubmitCommentClick={this.handleSubmitCommentClick} 
            />
          ))}
      </div>
    );
  }
}


// function mapStateToProps({ posts }) {
//   return { posts };
// }

function mapDispatchToProps(dispatch) {
  return {
    createCommentDispatch: comment => dispatch(createComment({comment})),
    deleteCommentDispatch: postId => dispatch(deleteComment({postId})),
    deleteCommentParentDispatch: postId => dispatch(deleteCommentParent({postId})),
    upVoteDispatch: postId => dispatch(upVoteComment({postId})),
    downVoteDispatch: postId => dispatch(downVoteComment({postId})),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CommentList);
