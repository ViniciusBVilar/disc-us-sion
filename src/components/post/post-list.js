import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { ALL_CATEGORIES } from '../../modules/home/home.page';
import { createCommentAPI } from '../../redux/actions/comments.actions';
import { deletePostAPI, downVotePostAPI, fetchPostsAPI, upVotePostAPI } from '../../redux/actions/post.actions';
import '../../styles/header.css';
import '../../styles/home.css';
import AddFAB from './add-fab';
import PostComponent from './post.component';
import PostsHeader from './posts-header';

class PostList extends React.Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    fetchPostsAPIDispatch: PropTypes.func.isRequired,
    deletePostAPIDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteAPIDispatch : PropTypes.func.isRequired,
    downVoteAPIDispatch : PropTypes.func.isRequired,
    createCommentAPIDispatch : PropTypes.func.isRequired,
  };

  state = {
    filtet: null
  };

  componentDidMount() {
    this.props.fetchPostsAPIDispatch();
  }
  
  handleDeletePostClick = id => {
    this.props.deletePostAPIDispatch(id);
    this.props.deleteCommentParentDispatch(id);
  };

  handleVotePostClick = (upVote, id) => {
    upVote ? this.props.upVoteAPIDispatch(id) : this.props.downVoteAPIDispatch(id);
  }

  handleSubmitCommentClick = comment => {
    this.props.createCommentAPIDispatch(comment);
  }

  handleFilter = filter => {
    this.setState({ filter });
  }

  render() {
    const { category, comments }= this.props;
    const posts = this.state.posts || this.props.posts;
    const filter = this.state.filter;
    return (
      <div>
        <PostsHeader title={category} onFilter={this.handleFilter}/>
        {!posts.error && posts ? Object.keys(posts).sort((a,b) => posts[a][filter] - posts[b][filter]).map((key, index) => {
          const post = posts[key].category === category || category === ALL_CATEGORIES ? posts[key] : null;

          const commentsCount = comments && post ? Object.keys(comments)
            .filter(commentId => comments[commentId].parentId === post.id) : [];
          return post && !post.deleted ?
            (
              <div key={`${post.id}${index}`} className="home-card">
                <PostComponent
                  key={post.id}
                  id={key}
                  title={post.title}
                  text={post.body}
                  category={post.category}
                  author={post.author}
                  voteScore={post.voteScore}
                  comments={commentsCount.length}
                  createdAt={post.timestamp} 
                  deleted={post.deleted} 
                  isDetail={false} 
                  onDeletePostClick={this.handleDeletePostClick}
                  onVotePostClick={this.handleVotePostClick}
                  onSubmitCommentClick={this.handleSubmitCommentClick} />
              </div>)
            : null;
        })
          : 
          <div className="home-card">
            <h2>Error: {posts.error.message}</h2>
          </div>}
        <AddFAB category={category}/>
      </div>
    );
  }

}

function mapStateToProps({ posts, comments }) {
  return { posts, comments }; 
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPostsAPIDispatch: postId => dispatch(fetchPostsAPI({postId})),
    deletePostAPIDispatch: postId => dispatch(deletePostAPI({postId})),
    upVoteAPIDispatch: postId => dispatch(upVotePostAPI({postId})),
    downVoteAPIDispatch: postId => dispatch(downVotePostAPI({postId})),

    // deletePostDispatch: postId => dispatch(deletePostAction({postId})),
    // deleteCommentParentDispatch: postId => dispatch(deleteCommentParent({postId})),
    // upVoteDispatch: postId => dispatch(upVotePost({postId})),
    // downVoteDispatch: postId => dispatch(downVotePost({postId})),
    createCommentAPIDispatch: comment => dispatch(createCommentAPI({comment})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
