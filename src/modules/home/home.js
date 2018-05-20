import React from 'react';
import { Box, Flex } from 'reflexbox';
import Categories from '../../components/categories';
import Header from '../../components/header';
import Posts from '../../components/posts';
import { fetchCategories } from '../../data/categories-data-source';
import { fetchAllPosts } from '../../data/posts-data-source';
import '../../styles/header.css';
import '../../styles/home.css';

class Home extends React.Component {

  state = {
    categories: null,
    loadingCategories: false,
    posts: null,
    loadingPosts: false,
  }

  posts = ['s', 's', 's'];

  componentDidMount() {
    fetchCategories()
      .then((categories) => this.setState(() => ({
        categories,
        loadingCategories: false,
      })))
    fetchAllPosts()
      .then((posts) => this.setState(() => ({
        posts,
        loadingPosts: false,
      })))
  }

  render() {
    const { categories, posts } = this.state;

    return (
      <div>
        <Header title={'DiscUSsion'} />
        <div className="header-offset">
          <Flex p={1} align='center'>
            <Box className="categories" px={2} w={1 / 6}>
              <Categories categories={categories} />
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <Posts category='All Categories' posts={posts}/>
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default Home;
