import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createComment, deleteCommentParent } from '../../redux/actions/comments.actions';
import { deletePost, downVotePost, upVotePost } from '../../redux/actions/post.actions';
import { fetchAllPosts } from '../../data/posts.data-source';
import '../../styles/header.css';
import '../../styles/home.css';
import AddFAB from './add-fab';
import PostComponent from './post.component';
import PostsHeader from './posts-header';
import { ALL_CATEGORIES } from '../../modules/home/home.page';

class PostList extends React.Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    deletePostDispatch: PropTypes.func.isRequired,
    deleteCommentParentDispatch: PropTypes.func.isRequired,
    upVoteDispatch : PropTypes.func.isRequired,
    downVoteDispatch : PropTypes.func.isRequired,
    createCommentDispatch : PropTypes.func.isRequired,
  };

  state = {
    filtet: null
  };

  componentDidMount() {
    fetchAllPosts()
      .then(posts => {
        return this.setState(() => ({
          posts,
          loadingPosts: false
        }));}
      )
      .catch(err => {
        alert(err);
      });
  }
  
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
        {posts && Object.keys(posts).sort((a,b) => posts[a][filter] - posts[b][filter]).map((key, index) => {
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
        })}
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
    deletePostDispatch: postId => dispatch(deletePost({postId})),
    deleteCommentParentDispatch: postId => dispatch(deleteCommentParent({postId})),
    upVoteDispatch: postId => dispatch(upVotePost({postId})),
    downVoteDispatch: postId => dispatch(downVotePost({postId})),
    createCommentDispatch: comment => dispatch(createComment({comment})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
