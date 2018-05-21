import React from 'react';
import { Box, Flex } from 'reflexbox';
import '../../styles/post.css';
import Statusbar from '../shared/status-bar';
import Toolbar from '../shared/tool-bar';

class PostComponent extends React.Component {

  render() {
    const { id, title, text, author, fires, comments, createdAt, category } = this.props;

    return (
      <div>
        <Flex wrap p={1} align='center'>
          <Flex p={1} align='center'>
            <Box px={2} w={3 / 4}>
              <h1>{title}</h1>
            </Box>
            <Box px={2} w={1 / 4}>
              <Toolbar id={id} category={category} createdAt={createdAt} isPost={true}/>
            </Box>
          </Flex>
          <Box px={2} w={1}>
            <h4>{text}</h4>
          </Box>
          <Box px={2} w={1}>
            <p>{author}</p>
          </Box>
        </Flex>
        <div className="status-bar-post">
          <Statusbar fires={fires} comments={comments} id={id} category={category} isPost={true}/>
        </div>
      </div>
    );
  }

}

export default PostComponent;
