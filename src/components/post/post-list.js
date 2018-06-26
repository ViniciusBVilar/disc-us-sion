import React from 'react';
import AddFAB from './add-fab';
import PostComponent from './post.component';
import PostsHeader from './posts-header';
import '../../styles/header.css';
import '../../styles/home.css';
import { connect } from 'react-redux';
import { deletePost, upVotePost, downVotePost } from '../../redux/actions/post.actions';
import { deleteCommentParent, createComment } from '../../redux/actions/comments.actions';
import { DEFAULT_CATEGORY } from './post-form.component';
import PropTypes from 'prop-types';

class Posts extends React.Component {

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
    // var posts = this.props && this.props.posts ? this.props.posts.map(post => post) : [];
    // posts.sort((a, b) => {return a === this.props.category});
    alert(filter);
    // TODO; order here
    this.setState({ filter });
  }

  render() {
    const { category, posts, comments }= this.props;

    return (
      <div>
        <PostsHeader title={category} onFilter={this.handleFilter}/>
        {posts && Object.keys(posts).map((key, index) => {
          const post = posts[key];
          const commentsCount = Object.keys(comments)
            .filter(commentId => comments[commentId].parentId === post.id);
          return post.deleted ? null
            : (
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
                  onDeletePostClick={this.handleDeletePostClick}
                  onVotePostClick={this.handleVotePostClick}
                  onSubmitCommentClick={this.handleSubmitCommentClick} />
              </div>);
        })}
        <AddFAB category={category}/>
      </div>
    );
  }

}

function mapStateToProps({ posts, comments }, ownProps) {
  if(!ownProps.category || ownProps.category == DEFAULT_CATEGORY) { 
    return { posts, comments }; 
  }
  const filteredPosts = Object.keys(posts).filter(postId => posts[postId].category === ownProps.category);
  return {posts: filteredPosts};
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
)(Posts);
