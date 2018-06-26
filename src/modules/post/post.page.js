import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../../components/comment/comment-list';
import PostComponent from '../../components/post/post.component';
import Header from '../../components/shared/header';
import { createComment, deleteCommentParent } from '../../redux/actions/comments.actions';
import { deletePost, downVotePost, upVotePost } from '../../redux/actions/post.actions';
import '../../styles/header.css';

class PostPage extends React.Component {

  static propTypes = {
    deletePostDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteDispatch: PropTypes.func.isRequired,
    downVoteDispatch: PropTypes.func.isRequired,
    createCommentDispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    commentsIds: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired,
  };

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

  handleDeletePostClick = id => {
    this.props.deletePostDispatch(id);
    this.props.deleteCommentParentDispatch(id);
  };

  handleVotePostClick = (upVote, id) => {
    upVote ? this.props.upVoteDispatch(id) : this.props.downVoteDispatch(id);
  }

  handleSubmitCommentClick = comment => {
    this.props.createCommentDispatch(comment);
  }
  
  render() {
    const { title, body, author, voteScore, timestamp, deleted } = this.props.post;
    const commentsIds = this.props.commentsIds || [];
    const { id, category } = this.props.params.match.params;

    return (
      <div>
        <Header title={'The Bomb'} />
        <div className='header-offset'>
          {deleted ? (
            <div className='status-bar-post'>
              <h1> Bomb has been defused!</h1>
            </div>) 
            : (<PostComponent
              id={id}
              title={title}
              text={body}
              author={author}
              voteScore={voteScore}
              comments={commentsIds.length}
              createdAt={timestamp}
              category={category}
              deleted={deleted}
              onDeletePostClick={this.handleDeletePostClick}
              onVotePostClick={this.handleVotePostClick}
              onSubmitCommentClick={this.handleSubmitCommentClick} 
            />)}
          <CommentList commentsIds={commentsIds} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps ) {
  const post = posts[ownProps.params.match.params.id];
  const commentsIds = Object.keys(comments).filter(commentId => comments[commentId]['parentId'] == [ownProps.params.match.params.id]);
  return { post, commentsIds };
}

function mapDispatchToProps(dispatch) {
  return {
    createCommentDispatch: comment => dispatch(createComment({comment})),
    deletePostDispatch: postId => dispatch(deletePost({postId})),
    deleteCommentParentDispatch: postId => dispatch(deleteCommentParent({postId})),
    upVoteDispatch: postId => dispatch(upVotePost({postId})),
    downVoteDispatch: postId => dispatch(downVotePost({postId})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
