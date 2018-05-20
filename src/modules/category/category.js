import React from 'react';
import { Box, Flex } from 'reflexbox';
import Categories from '../../components/categories';
import Header from '../../components/header';
import Posts from '../../components/posts';
import '../../styles/header.css';
import '../../styles/home.css';

class Category extends React.Component {

  render() {
    const category = this.props.category.match.params.category || 'adssad';

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
