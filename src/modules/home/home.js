import React from 'react';
import { Box, Flex } from 'reflexbox';
import AddFAB from '../../components/add-fab';
import Categories from '../../components/categories';
import Header from '../../components/header';
import PostComponent from '../../components/post.component';
import PostsHeader from '../../components/posts-header';
import '../../styles/header.css';
import '../../styles/home.css';

class Home extends React.Component {

  posts = ['s', 's', 's'];

  render() {
    return (
      <div>
        <Header title={'DiscUSsion'} />
        <div className="header-offset">
          <Flex p={1} align='center'>
            <Box className="categories" px={2} w={1 / 6}>
              <Categories />
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <PostsHeader title="All posts" />
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
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default Home;
