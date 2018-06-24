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
    const comments = this.props.postComments;
    return (
      <div>
        {comments &&
          comments.map((comment, index) => (
            <CommentComponent
              key={index}
              comment={comment} 
              onDeleteCommentClick={this.handleDeleteCommentClick}
              onVoteCommentClick={this.handleVoteCommentClick}
              onSubmitCommentClick={this.handleSubmitCommentClick} 
            />
          ))}
      </div>
    );
  }
}


function mapStateToProps({ comments }, ownProps) {
  const postComments = ownProps.commentsIds && ownProps.commentsIds.map(commentId => comments[commentId]);
  return { postComments };
}

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
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
