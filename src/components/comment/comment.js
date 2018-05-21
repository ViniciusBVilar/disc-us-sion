import React from 'react';
import { Box, Flex } from 'reflexbox';
import CommentSeparator from './comment-separator';
import '../../styles/comment.css';
import '../../styles/post.css';
import Statusbar from '../shared/status-bar';
import Toolbar from '../shared/tool-bar';

class Comment extends React.Component {

  render() {
    const { id, parentId, deleted, parentDeleted, author, body, timestamp, voteScore, category } = this.props.comment;
    
    return (
      <div>
        <Flex wrap p={1} align='center'>
          <Flex p={1} align='center'>
            <Box px={2} w={3 / 4}>
              <h1>{body}</h1>
            </Box>
            <Box px={2} w={1 / 4}>
              <Toolbar id={id} category={category} createdAt={timestamp} isPost={false}/>
            </Box>
          </Flex>
          <Box px={2} w={1}>
            <p>{author}</p>
          </Box>
        </Flex>
        <div className="status-bar-comment">
          <Statusbar fires={voteScore} id={id} category={category} isPost={false} newComment={id != null}/>
        </div>
        <CommentSeparator />
      </div>
    );
  }

}

export default Comment;
