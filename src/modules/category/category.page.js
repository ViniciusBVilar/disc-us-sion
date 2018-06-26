import React from 'react';
import { Box, Flex } from 'reflexbox';
import Categories from '../../components/shared/categories';
import Header from '../../components/shared/header';
import Posts from '../../components/post/post-list';
import { fetchCategories } from '../../data/categories.data-source';
import '../../styles/header.css';
import '../../styles/home.css';
import { APP_NAME } from '../home/home.page';

class CategoryPage extends React.Component {
  state = {
    category: null,
    categories: null,
    loadingCategories: false,
    // posts: null,
    // loadingPosts: false
  };

  // // TODO: replace with getDerivedStateFromProps()
  // UNSAFE_componentWillReceiveProps() {
  //   const category = this.props.category.match.params.category;
  //   this.setState({ category });
  //   this.fetchPosts(category);
  // }

  componentDidMount() {
    const category = this.props.category.match.params.category;
    this.setState({ category });
    fetchCategories()
      .then(categories =>
        this.setState(() => ({
          categories,
          loadingCategories: false
        }))
      )
      .catch(err => {
        alert(`Error: ${err}. - Make sure the server are on line!`);
      });
  }

  // fetchPosts(category) {
  //   fetchCategoryPosts(category)
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

  // componentWillUnmount() {
  //   this.setState(() => ({}));
  // }

  render() {
    const { categories } = this.state;
    const category = this.props.category.match.params.category;

    return (
      <div>
        <Header title={APP_NAME} />
        <div className='header-offset'>
          <Flex p={1} align='center'>
            <Box className='categories' px={2} w={1 / 6}>
              <Categories categories={categories} />
            </Box>
            <Box px={2} ml='25%' w={5 / 6}>
              <Posts category={category} />
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
