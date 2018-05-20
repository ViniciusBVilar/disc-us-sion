import React from 'react';
import AddFAB from '../components/add-fab';
import PostComponent from '../components/post.component';
import PostsHeader from '../components/posts-header';
import '../styles/header.css';
import '../styles/home.css';

class Posts extends React.Component {

  render() {
    const { category, posts }= this.props;

    return (
      <div>
        <PostsHeader title={category} />
        {posts && posts.map((post, index) => (
          <div key={`${post.id}${index}`} className="home-card">
            <PostComponent
              key={post.id}
              id={post.id}
              title={post.title}
              text={post.body}
              category={post.category}
              author={post.author}
              fires={post.voteScore}
              comments={post.commentCount}
              createdAt={post.timestamp} 
              deleted={post.deleted}/>
          </div>
        ))}
        <AddFAB />
      </div>
    );
  }

}

export default Posts;
