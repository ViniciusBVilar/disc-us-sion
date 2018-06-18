import React from 'react';
import { Box, Flex } from 'reflexbox';
import Posts from '../../components/post/posts';
import Categories from '../../components/shared/categories';
import Header from '../../components/shared/header';
import { fetchCategories } from '../../data/categories.data-source';
import { fetchAllPosts } from '../../data/posts.data-source';
import '../../styles/header.css';
import '../../styles/home.css';

class HomePage extends React.Component {
  // state = {
  //   categories: null,
  //   loadingCategories: false,
  //   posts: null,
  //   loadingPosts: false
  // };

  // posts = ['s', 's', 's'];

  // componentDidMount() {
  //   fetchCategories()
  //     .then(categories =>
  //       this.setState(() => ({
  //         categories,
  //         loadingCategories: false
  //       }))
  //     )
  //     .catch(err => alert(err));

  //   fetchAllPosts()
  //     .then(posts =>
  //       this.setState(() => ({
  //         posts,
  //         loadingPosts: false
  //       }))
  //     )
  //     .catch(err => {
  //       alert(err);
  //     });
  // }

  render() {

    return (
      <div>
        <Header title={'DiscUSsion'} />
        <div className='header-offset'>
          <Flex p={1} align='center'>
            <Box className='categories' px={2} w={1 / 6}>
              <Categories/>
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <Posts category='All Categories'/>
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default HomePage;