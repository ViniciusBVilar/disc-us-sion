import React from 'react';
import {
  downVoteCommentAPI,
  upVoteCommentAPI, 
  editCommentAPI,
  deleteCommentAPI} from '../../redux/actions/comments.actions';
import CommentComponent from './comment.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentList extends React.Component {

  static propTypes = {
    editCommentAPIDispatch: PropTypes.func.isRequired,
    deleteCommentAPIDispatch: PropTypes.func.isRequired,
    upVoteCommentAPIDispatch: PropTypes.func.isRequired,
    downVoteCommentAPIDispatch: PropTypes.func.isRequired,
    postComments: PropTypes.array.isRequired,
  };

  handleEditCommentClick = (comment, id) => {
    const data = {
      ...comment,
      id,
    };
    this.props.editCommentAPIDispatch(data);
  };

  handleDeleteCommentClick = id => {
    this.props.deleteCommentAPIDispatch(id);
  };

  handleVoteCommentClick = (upVote, id) => {
    upVote ? this.props.upVoteCommentAPIDispatch(id) : this.props.downVoteCommentAPIDispatch(id);
  }

  render() {
    const comments = this.props.postComments;

    return (
      <div>
        {!comments.error && comments ?
          comments.map((comment, index) => (
            <CommentComponent
              key={index}
              comment={comment} 
              onEditCommentClick={this.handleEditCommentClick}
              onDeleteCommentClick={this.handleDeleteCommentClick}
              onVoteCommentClick={this.handleVoteCommentClick}
              onSubmitCommentClick={this.handleSubmitCommentClick} 
            />
          ))
          : <h2>Error: {comments.error.message}</h2>}
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
    editCommentAPIDispatch: comment => dispatch(editCommentAPI(comment)),
    deleteCommentAPIDispatch: commentId => dispatch(deleteCommentAPI(commentId)),
    upVoteCommentAPIDispatch: commentId => dispatch(upVoteCommentAPI(commentId)),
    downVoteCommentAPIDispatch: commentId => dispatch(downVoteCommentAPI(commentId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
