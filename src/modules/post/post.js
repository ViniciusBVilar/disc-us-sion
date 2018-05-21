import React from 'react';
import Header from '../../components/shared/header';
import PostComponent from '../../components/post/post.component';
import CommentList from '../../components/comment/comment-list';
import '../../styles/header.css';
import { fetchPostDetails, fetchPostComments } from '../../data/posts-data-source';

class Post extends React.Component {

  likes = 122;
  state = {
    details: {},
    comments: [],
  }

  componentDidMount() {
    const id = this.props.params.match.params.id
    fetchPostDetails(id)
      .then((details) => this.setState({ details }))
      .catch((err) => { alert(err) });

    fetchPostComments(id)
      .then((comments) => this.setState({ comments }))
      .catch((err) => { alert(err) });
  }

  render() {
    const { title, body, author, upVotes, timestamp } = this.state.details;
    const comments = this.state.comments || [];
    const { id , category } = this.props.params.match.params;

    return (
      <div>
        <Header title={'The Bomb'} />
        <div className="header-offset">
          <PostComponent
            id={id}
            title={title}
            text={body}
            author={author}
            fires={upVotes}
            comments={comments.length}
            createdAt={timestamp} 
            category={category}/>
          <CommentList comments={comments} />
        </div>
      </div>
    );
  }
}

export default Post;
