import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex } from 'reflexbox';
import Posts from '../../components/post/post-list';
import Categories from '../../components/shared/categories';
import Header from '../../components/shared/header';
import { fetchCategories } from '../../data/categories.data-source';
import { fetchCategoryPostsAPI } from '../../redux/actions/post.actions';
import '../../styles/header.css';
import '../../styles/home.css';
import { APP_NAME } from '../home/home.page';

export const defaultCategories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
];

class CategoryPage extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    fetchPostsAPIDispatch: PropTypes.func.isRequired
  };

  state = {
    category: null,
    categories: null,
    loadingCategories: false
  };

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
    this.props.fetchPostsAPIDispatch();
  }

  render() {
    const categories = defaultCategories;
    const category = this.props.category.match.params.category;

    return (
      <div>
        <Header title={APP_NAME} />
        <div className="header-offset">
          <Flex p={1} align="center">
            <Box className="categories" px={2} w={1 / 6}>
              <Categories categories={categories} />
            </Box>
            <Box px={2} ml="25%" w={5 / 6}>
              <Posts category={category} />
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }) {
  return { posts, comments };
}

function mapDispatchToProps(dispatch, ownProps) {
  const category = ownProps.category.match.params.category;
  return {
    fetchPostsAPIDispatch: () => dispatch(fetchCategoryPostsAPI(category))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);
