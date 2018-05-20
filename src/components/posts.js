import React from 'react';
import AddFAB from '../components/add-fab';
import PostComponent from '../components/post.component';
import PostsHeader from '../components/posts-header';
import '../styles/header.css';
import '../styles/home.css';

class Posts extends React.Component {

  posts = ['s', 's', 's'];

  render() {
    const category = this.props.category;
    
    return (
      <div>
        <PostsHeader title={category} />
        {this.posts && this.posts.map((post, index) => (
          <div key={`div${index}`} className="home-card">
            <PostComponent
              key={`PostComponent${index}`}
              title="Title test"
              text="blablabla asasdasdsa dasd asd asd awd asd asd sad"
              author="Darwin, Author"
              fires={333}
              comments={666}
              createdAt="12/12/2012" />
          </div>
        ))}
        <AddFAB />
      </div>
    );
  }

}

export default Posts;
