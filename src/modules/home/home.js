import React from 'react';
import Header from '../../components/header';
import PostsHeader from '../../components/posts-header';
import AddFAB from '../../components/add-fab';
import PostComponent from '../../components/post.component';
import '../../styles/header.css';
import '../../styles/home.css';

class Home extends React.Component {

  posts = ['s','s']

  render() {
    return (
      <div>
        <Header title={'DiscUSsion'} />
        <div class="header-offset">
          <PostsHeader />
          {this.posts && this.posts.map((post, index) => (
            <div className="post-card">
              <PostComponent
                title="Title test"
                text="blablabla asasdasdsa dasd asd asd awd asd asd sad"
                author="Darwin, Author"
                fires={333}
                comments={666}
                createdAt="12/12/2012" />
            </div>
          ))}
        </div>
        <AddFAB />
      </div>
    );
  }
}

export default Home;
