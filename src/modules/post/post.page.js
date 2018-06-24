import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../../components/comment/comment-list';
import PostComponent from '../../components/post/post.component';
import Header from '../../components/shared/header';
import {
  createComment,
  deleteCommentParent,
  downVoteComment,
  upVoteComment } from '../../redux/actions/comments.actions';
import '../../styles/header.css';
import { deleteComment } from '../../data/comments.data-source';

class PostPage extends React.Component {
  // likes = 122;
  // state = {
  //   details: {},
  //   comments: []
  // };

  // componentDidMount() {
  //   const id = this.props.params.match.params.id;
  //   fetchPostDetails(id)
  //     .then(details => this.setState({ details }))
  //     .catch(err => {
  //       alert(err);
  //     });

  //   fetchPostComments(id)
  //     .then(comments => this.setState({ comments }))
  //     .catch(err => {
  //       alert(err);
  //     });
  // }

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
    const { title, body, author, upVotes, timestamp } = this.props.post;
    const comments = this.props.postComments || [];
    const { id, category } = this.props.params.match.params;

    return (
      <div>
        <Header title={'The Bomb'} />
        <div className='header-offset'>
          <PostComponent
            id={id}
            title={title}
            text={body}
            author={author}
            fires={upVotes}
            comments={comments.length}
            createdAt={timestamp}
            category={category}
            onDeleteCommentClick={this.handleDeleteCommentClick}
            onVoteCommentClick={this.handleVoteCommentClick}
            onSubmitCommentClick={this.handleSubmitCommentClick} 
          />
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps ) {
  const post = posts[ownProps.params.match.params.id];
  const postComments = Object.keys(comments).filter(commentId => comments[commentId]['parentId'] == [ownProps.params.match.params.id]);
  return { post, postComments };
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
)(PostPage);
