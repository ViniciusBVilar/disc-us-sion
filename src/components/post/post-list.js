import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { ALL_CATEGORIES } from '../../modules/home/home.page';
import {
  createCommentAPI,
  deleteCommentParent
} from '../../redux/actions/comments.actions';
import {
  deletePostAPI,
  downVotePostAPI,
  fetchPostsAPI,
  upVotePostAPI,
} from '../../redux/actions/post.actions';
import '../../styles/header.css';
import '../../styles/home.css';
import AddFAB from './add-fab';
import PostComponent from './post.component';
import PostsHeader, { VOTE_SCORE } from './posts-header';

class PostList extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    error: PropTypes.object,
    fetchPostsAPIDispatch: PropTypes.func.isRequired,
    deletePostAPIDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteAPIDispatch: PropTypes.func.isRequired,
    downVoteAPIDispatch: PropTypes.func.isRequired,
    createCommentAPIDispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPostsAPIDispatch();
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

  handleFilter = filter => {
    this.setState({ filter });
  };

  filter = (posts, a, b, filter) => {
    return filter === VOTE_SCORE
      ? posts[a][filter] < posts[b][filter]
      : posts[a][filter] > posts[b][filter];
  };

  render() {
    const { category } = this.props;
    const posts = this.props.posts;
    const filter = this.state ? this.state.filter : '';
    return (
      <div>
        <PostsHeader title={category} onFilter={this.handleFilter} />
        {!posts.error && posts ? (
          Object.keys(posts)
            .sort((a, b) => this.filter(posts, a, b, filter))
            .map((key, index) => {
              const post =
                posts[key].category === category || category === ALL_CATEGORIES
                  ? posts[key]
                  : null;

              return post && !post.deleted ? (
                <div key={`${post.id}${index}`} className="home-card">
                  <PostComponent
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    text={post.body}
                    category={post.category}
                    author={post.author}
                    voteScore={post.voteScore}
                    comments={post.commentCount}
                    createdAt={post.timestamp}
                    deleted={post.deleted}
                    isDetail={false}
                    onDeletePostClick={this.handleDeletePostClick}
                    onVotePostClick={this.handleVotePostClick}
                    onSubmitCommentClick={this.handleSubmitCommentClick}
                  />
                </div>
              ) : null;
            })
        ) : (
          <div className="home-card">
            <h2>Error: {posts.error.message}</h2>
          </div>
        )}
        <AddFAB category={category} />
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostsAPIDispatch: postId => dispatch(fetchPostsAPI(postId)),
    deletePostAPIDispatch: postId => dispatch(deletePostAPI(postId)),
    deleteCommentParentDispatch: postId => dispatch(deleteCommentParent(postId)),
    upVoteAPIDispatch: postId => dispatch(upVotePostAPI(postId)),
    downVoteAPIDispatch: postId => dispatch(downVotePostAPI(postId)),
    createCommentAPIDispatch: comment => dispatch(createCommentAPI(comment))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
