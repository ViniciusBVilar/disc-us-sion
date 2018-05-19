import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';

class Statusbar extends React.Component {

  render() {
    return (
      <Flex p={1} align='center'>
        <Box px={2} w={1/3}>{this.props.likes} likes</Box>
        <Box px={2} w={1/3}>{this.props.comments} comments</Box>
        <Box px={2} w={1/3}>
          <Link to="/">
            <p>+ Add coment</p>
          </Link>
        </Box>
      </Flex>
    );
  }

}

export default Statusbar;
