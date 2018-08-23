import React from 'react';
import {
  downVoteCommentAPI,
  upVoteCommentAPI, 
  editCommentAPI,
  deleteCommentAPI} from '../../redux/actions/comments.actions';
import CommentComponent from './comment.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostCommentsAPI } from '../../redux/actions/post.actions';

class CommentList extends React.Component {

  static propTypes = {
    fetchPostCommentsAPIDispatch: PropTypes.func.isRequired,
    editCommentAPIDispatch: PropTypes.func.isRequired,
    deleteCommentAPIDispatch: PropTypes.func.isRequired,
    upVoteCommentAPIDispatch: PropTypes.func.isRequired,
    downVoteCommentAPIDispatch: PropTypes.func.isRequired,
    comments: PropTypes.object.isRequired,
    parentDeleted: PropTypes.bool.isRequired,
    postId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    debugger;
    this.props.fetchPostCommentsAPIDispatch(this.props.postId);
  }

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
    const comments = this.props.comments;
    const parentDeleted = this.props.parentDeleted;

    return (
      <div>
        {!comments.error && comments ?
          Object.keys(comments).map((commentId, index) => (
            <CommentComponent
              key={index}
              comment={comments[commentId]} 
              parentDeleted={parentDeleted} 
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

function mapStateToProps({ comments }) {
  debugger;
  return { comments };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostCommentsAPIDispatch: postId => dispatch(fetchPostCommentsAPI(postId)),
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
