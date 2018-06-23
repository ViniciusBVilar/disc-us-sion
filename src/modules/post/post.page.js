import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../../components/comment/comment-list';
import PostComponent from '../../components/post/post.component';
import Header from '../../components/shared/header';
import { createPost, editPost } from '../../redux/actions/post.actions';
import '../../styles/header.css';

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

  
  render() {
    const { title, body, author, upVotes, timestamp } = this.props.post;
    const comments = this.props.comments || [];
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
          />
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps = {} ) {
  // const postId = this.props.params.match.params.id;
  const post = posts['123'];
  return { post };
}

function mapDispatchToProps(dispatch) {
  return {
    createPostDispatch: post => dispatch(createPost({post})),
    editPostDispatch: post => dispatch(editPost({post})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
