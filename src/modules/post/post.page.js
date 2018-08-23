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
  upVotePostAPI,
  fetchPostDetailsAPI
} from '../../redux/actions/post.actions';
import '../../styles/header.css';

class PostPage extends React.Component {
  static propTypes = {
    fetchPostDetailsAPIDispatch: PropTypes.func.isRequired,
    deletePostAPIDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteAPIDispatch: PropTypes.func.isRequired,
    downVoteAPIDispatch: PropTypes.func.isRequired,
    createCommentAPIDispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchPostDetailsAPIDispatch(this.props.params.match.params.id);
  }

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
      commentCount,
      timestamp,
      deleted,
      error
    } = this.props.post || {};
    const { id, category } = this.props.params.match.params;

    return (
      <div>
        <Header title={'The Bomb'} />
        <div className="header-offset">
          {error ? (
            <h1>{error.message}</h1>
          ) : (
            <div>
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
                  comments={commentCount}
                  createdAt={timestamp}
                  category={category}
                  deleted={deleted}
                  isDetail={true}
                  onDeletePostClick={this.handleDeletePostClick}
                  onVotePostClick={this.handleVotePostClick}
                  onSubmitCommentClick={this.handleSubmitCommentClick}
                />
              )}
              <CommentList parentDeleted={deleted} postId={id}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  debugger;
  return { post };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostDetailsAPIDispatch: postId => dispatch(fetchPostDetailsAPI(postId)),
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
