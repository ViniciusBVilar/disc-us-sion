import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../../components/comment/comment-list';
import PostComponent from '../../components/post/post.component';
import Header from '../../components/shared/header';
import {
  createCommentAPI,
  deleteCommentParent
} from '../../redux/actions/comments.actions';
import {
  deletePostAPI,
  downVotePostAPI,
  upVotePostAPI
} from '../../redux/actions/post.actions';
import '../../styles/header.css';

class PostPage extends React.Component {
  static propTypes = {
    deletePostAPIDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteAPIDispatch: PropTypes.func.isRequired,
    downVoteAPIDispatch: PropTypes.func.isRequired,
    createCommentAPIDispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    commentsIds: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired
  };

  handleDeletePostClick = id => {
    this.props.deletePostAPIDispatch(id);
    this.props.deleteCommentParentDispatch(id);
  };

  handleVotePostClick = (upVote, id) => {
    upVote
      ? this.props.upVoteAPIDispatch(id)
      : this.props.downVoteAPIDispatch(id);
  };

  handleSubmitCommentClick = comment => {
    this.props.createCommentAPIDispatch(comment);
  };

  render() {
    const {
      title,
      body,
      author,
      voteScore,
      timestamp,
      deleted,
      error
    } = this.props.post;
    const commentsIds = this.props.commentsIds || [];
    const { id, category } = this.props.params.match.params;

    return (
      <div>
        <Header title={'The Bomb'} />
        {error ? (
          <h1>{error.message}</h1>
        ) : (
          <div className="header-offset">
            {deleted ? (
              <div className="status-bar-post">
                <h1>404 Page no found</h1>
              </div>
            ) : (
              <PostComponent
                id={id}
                title={title}
                text={body}
                author={author}
                voteScore={voteScore}
                comments={commentsIds.length}
                createdAt={timestamp}
                category={category}
                deleted={deleted}
                isDetail={true}
                onDeletePostClick={this.handleDeletePostClick}
                onVotePostClick={this.handleVotePostClick}
                onSubmitCommentClick={this.handleSubmitCommentClick}
              />
            )}
            <CommentList commentsIds={commentsIds} parentDeleted={deleted} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  const post = posts[ownProps.params.match.params.id]
    ? posts[ownProps.params.match.params.id]
    : {};
  let commentsIds = Object.keys(comments).filter(
    commentId =>
      comments[commentId]['parentId'] === ownProps.params.match.params.id
  );
  return { post, commentsIds };
}

function mapDispatchToProps(dispatch) {
  return {
    createCommentAPIDispatch: comment => dispatch(createCommentAPI(comment)),
    deletePostAPIDispatch: postId => dispatch(deletePostAPI(postId)),
    upVoteAPIDispatch: postId => dispatch(upVotePostAPI(postId)),
    downVoteAPIDispatch: postId => dispatch(downVotePostAPI(postId)),
    deleteCommentParentDispatch: postId => dispatch(deleteCommentParent(postId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
