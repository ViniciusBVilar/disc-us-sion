import React from 'react';
import {
  downVoteComment,
  upVoteComment, 
  editComment,
  deleteComment} from '../../redux/actions/comments.actions';
import CommentComponent from './comment.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentList extends React.Component {

  static propTypes = {
    editCommentDispatch: PropTypes.func.isRequired,
    deleteCommentDispatch: PropTypes.func.isRequired,
    upVoteCommentDispatch: PropTypes.func.isRequired,
    downVoteCommentDispatch: PropTypes.func.isRequired,
    postComments: PropTypes.array.isRequired,
  };

  handleEditCommentClick = (comment, id) => {
    const data = {
      ...comment,
      id,
    };
    this.props.editCommentDispatch(data);
  };

  handleDeleteCommentClick = id => {
    this.props.deleteCommentDispatch(id);
  };

  handleVoteCommentClick = (upVote, id) => {
    upVote ? this.props.upVoteCommentDispatch(id) : this.props.downVoteCommentDispatch(id);
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
              onEditCommentClick={this.handleEditCommentClick}
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
    editCommentDispatch: comment => dispatch(editComment({ comment })),
    deleteCommentDispatch: commentId => dispatch(deleteComment({ commentId })),
    upVoteCommentDispatch: commentId => dispatch(upVoteComment({ commentId })),
    downVoteCommentDispatch: commentId => dispatch(downVoteComment({ commentId })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
