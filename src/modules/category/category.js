import React from 'react';
import Header from '../../components/header';
import PostsHeader from '../../components/posts-header';
import AddFAB from '../../components/add-fab';
import PostComponent from '../../components/post.component';
import '../../styles/header.css';
import '../../styles/home.css';
import { Box, Flex } from 'reflexbox';
import { Link } from 'react-router-dom';
import Categories from '../../components/categories';
import Posts from '../../components/posts';

class Category extends React.Component {

  render() {
    const category = this.props.category.match.params.category

    return (
      <div>
        <Header title={'DiscUSsion'} />
        <div className="header-offset">
          <Flex p={1} align='center'>
            <Box className="categories" px={2} w={1 / 6}>
              <Categories />
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

export default Category;
