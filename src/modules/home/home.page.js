import React from 'react';
import { Box, Flex } from 'reflexbox';
import PostList from '../../components/post/post-list';
import Categories from '../../components/shared/categories';
import Header from '../../components/shared/header';
import { fetchCategories } from '../../data/categories.data-source';
import '../../styles/header.css';
import '../../styles/home.css';
import { defaultCategories } from '../category/category.page';

export const APP_NAME = 'Readable';
export const ALL_CATEGORIES = 'All Categories';

class HomePage extends React.Component {
  state = {
    categories: null,
    loadingCategories: false,
    // posts: null,
    // loadingPosts: false
  };

  componentDidMount() {
    fetchCategories()
      .then(categories =>
        this.setState(() => ({
          categories,
          loadingCategories: false
        }))
      )
      .catch(err => alert(`FetchCategories Error: ${err}. - Make sure the server is on line!`));
  }

  render() {
    const categories = this.state.categories || defaultCategories;
    return (
      <div>
        <Header title={APP_NAME} />
        <div className='header-offset'>
          <Flex p={1} align='center'>
            <Box className='categories' px={2} w={1 / 6}>
              <Categories categories={categories}/>
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <PostList category={ALL_CATEGORIES}/>
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default HomePage;