import React from 'react';
import { Box, Flex } from 'reflexbox';
import Posts from '../../components/post/post-list';
import Categories from '../../components/shared/categories';
import Header from '../../components/shared/header';
import { fetchCategories } from '../../data/categories.data-source';
import '../../styles/header.css';
import '../../styles/home.css';

export const APP_NAME = 'ikˈsplōZHən';
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
      .catch(err => alert(`Error: ${err}. - Make sure the server is on line!`));
  }

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
    const { categories } = this.state;
    return (
      <div>
        <Header title={APP_NAME} />
        <div className='header-offset'>
          <Flex p={1} align='center'>
            <Box className='categories' px={2} w={1 / 6}>
              <Categories categories={categories}/>
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <Posts category={ALL_CATEGORIES}/>
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default HomePage;