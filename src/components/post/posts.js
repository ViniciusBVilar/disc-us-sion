import React from 'react';
import AddFAB from './add-fab';
import PostComponent from './post.component';
import PostsHeader from './posts-header';
import '../../styles/header.css';
import '../../styles/home.css';
import { connect } from 'react-redux';
import { deletePost, upVotePost, downVotePost } from '../../redux/actions/post.actions';
import { deleteCommentParent, createComment } from '../../redux/actions/comments.actions';

class Posts extends React.Component {
  
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
    const { category, posts }= this.props;

    return (
      <div>
        <PostsHeader title={category} />
        {posts && Object.keys(posts).map((key, index) => {
          const post = posts[key];
          return (
            <div key={`${post.id}${index}`} className="home-card">
              <PostComponent
                key={post.id}
                id={key}
                title={post.title}
                text={post.body}
                category={post.category}
                author={post.author}
                fires={post.voteScore}
                comments={post.commentCount}
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

function mapStateToProps({ posts }) {
  return { posts };
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
