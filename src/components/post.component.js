import React from 'react';
import { Box, Flex } from 'reflexbox';
import '../styles/post.css';
import Statusbar from './status-bar';
import Toolbar from './tool-bar';

class PostComponent extends React.Component {

  render() {
    const { title, text, author, fires, comments, createdAt } = this.props;

    return (
      <div >
        <Flex wrap p={1} align='center'>
          <Flex p={1} align='center'>
            <Box px={2} w={3 / 4}>
              <h1>{title}</h1>
            </Box>
            <Box px={2} w={1 / 4}>
              <Toolbar createdAt={createdAt} />
            </Box>
          </Flex>
          <Box px={2} w={1}>
            <h4>{text}</h4>
          </Box>
          <Box px={2} w={1}>
            <p>{author}</p>
          </Box>
        </Flex>
        <div className="status-bar">
          <Statusbar fires={fires} comments={comments} />
        </div>
      </div>
    );
  }

}

export default PostComponent;
