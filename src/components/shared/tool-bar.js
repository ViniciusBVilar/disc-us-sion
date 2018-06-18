import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import { deletePost } from '../../data/posts.data-source';

class Toolbar extends React.Component {

  render() {
    const { id, category, createdAt, onClick } = this.props;

    return (
      <Flex p={2} align='center'>
        <Box px={2} w={3 / 5}>
          {new Date(createdAt).toString()}
        </Box>
        <Box px={2} w={1 / 5}>
          <Link to={`/editForm/${category}${id ? `/${id}` : ''}`}>
            <p>Editar</p>
          </Link>
        </Box>
        <Box px={2} w={1 / 5}>
          <button onClick={() => onClick(id)}>
            <h2>Delete</h2>
          </button>
        </Box>
      </Flex>
    );
  }
}

export default Toolbar;