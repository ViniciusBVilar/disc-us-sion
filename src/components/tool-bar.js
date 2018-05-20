import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';

class Toolbar extends React.Component {

  render() {
    return (
      <Flex p={2} align='center'>
        <Box px={2} w={3/5}>{this.props.createdAt}</Box>
        <Box px={2} w={1/5}>
          <Link to="/postForm">
            <p>Editar</p>
          </Link>
        </Box>
        <Box px={2} w={1/5}>
          <Link to="/">
            <p>Deletar</p>
          </Link>
        </Box>
      </Flex>
    );
  }

}

export default Toolbar;
